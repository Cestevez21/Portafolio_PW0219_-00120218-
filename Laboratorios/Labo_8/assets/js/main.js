var rows = [];
var counterId = 0;

var parseLateSwitch = value => {
  if (value) {
    return "Tarde :(";
  }
  return "A tiempo :(";
};

function addRow(carnet, schedule, late, tBody) {
  var newRow = document.createElement("tr");
  var date = new Date();
  rows.push({
    id: counterId,
    carnet: carnet,
    schedule: schedule,
    late: late
  });

  newRow.innerHTML = `
    <td><b>${carnet}</b></td>
    <td>${schedule}</td>
    <td>${date.toLocaleString()}</td>
    <td>${late}</td>`;

  var cellContainer = document.createElement("td");
  var deleteButton = document.createElement("button");

  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-danger");
  deleteButton.innerText = "Eliminar";
  deleteButton.value = counterId;

  cellContainer.appendChild(deleteButton);
  newRow.appendChild(cellContainer);
  tBody.appendChild(newRow);

  var validaCarnet = document.createElement("input");
  var cellContainer1 = document.createElement("td");
  validaCarnet.id = "input" + counterId;
  validaCarnet.type = Text;

  cellContainer1.appendChild(validaCarnet);
  newRow.appendChild(cellContainer1);
  tBody.appendChild(newRow);
  counterId++;

  deleteButton.addEventListener("click", function(event) {
    var carnetV = validaCarnet.value;
    var idElement = event.srcElement.value;
    var trToDelete = document.querySelector(`button[value='${idElement}']`)
      .parentElement.parentElement;
    var cid = document.querySelector(`#input${idElement}`).value;

    rows.forEach((item, index) => {
      if (item.id == idElement) {
        if (item.carnet == cid) {
          rows.splice(index, 1);
          tBody.removeChild(trToDelete);
        } else {
          alert("El Carnet no coincide");
        }
      }
    });
  });
}

window.onload = function() {
  var submit_btn = document.querySelector("#submit_btn");
  var carnet_field = document.querySelector("#carnet_field");
  var schedule_field = document.querySelector("#schedule_field");
  var late_switch = document.querySelector("#late_switch");
  var tBody = document.querySelector("#table_body");

  var carnetRegex = new RegExp("[0-9]{8}");

  submit_btn.addEventListener("click", () => {
    var carnet = carnet_field.value;
    var schedule = schedule_field.options[schedule_field.selectedIndex].text;
    var late = parseLateSwitch(late_switch.checked);

    if (carnetRegex.test(carnet)) {
      addRow(carnet, schedule, late, tBody);
    } else {
      alert("Formato no valido");
    }
  });

  carnet_field.addEventListener("keyup", event => {
    var carnet = carnet_field.value;
    if (carnetRegex.test(carnet)) {
      submit_btn.disabled = false;
    } else {
      submit_btn.disabled = false;
    }
  });
};
