function tres(num, arreglo) {
  var total = 0;

  for (var i = 0; i < arreglo.length; i++) {
    if (num === arreglo[i]) {
      total++;
    }
  }
  console.log("el numero " + num + " se repite: " + total);
}
