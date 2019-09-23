function cuatro(num) {
  valores = [];
  var numaletorio;

  for (var i = 0; i < 20; i++) {
    numaletorio = Math.floor(Math.random() * 100) + 1;
    valores.push(numaletorio);
  }

  for (var j = 0; j < 20; j++) {
    if (num === valores[j]) {
      console.log("ganaste");
    } else {
      console.log("perdiste");
    }
  }

  return valores;
}
