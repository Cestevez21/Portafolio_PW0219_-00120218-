function dos(arreglo) {
  var sum = 0;
  var prom = 0;

  for (var i = 0; i < arreglo.length; i++) {
    sum += arreglo[i];
  }
  prom = sum / arreglo.length;
  console.log("suma: " + sum + " promedio: " + prom);
}
