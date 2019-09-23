function seis(arreglo) {
  var aux;
  console.log(arreglo);

  for (var k = 0; k < arreglo.length; k++) {
    for (var i = 0; i < arreglo.length - k; i++) {
      if (arreglo[i] > arreglo[i + 1]) {
        aux = arreglo[i];
        arreglo[i] = arreglo[i + 1];
        arreglo[i + 1] = aux;
      }
    }
  }
  console.log(arreglo);
}
