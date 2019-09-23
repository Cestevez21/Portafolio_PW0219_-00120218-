function uno(arreglo) {
  var num = 0;
  var pal = 0;
  var bool = 0;
  var und = 0;
  var obj = 0;

  for (var i = 0; i < arreglo.length; i++) {
    if (typeof arreglo[i] === "number") {
      num++;
    }
    if (typeof arreglo[i] === "string") {
      pal++;
    }
    if (typeof arreglo[i] === "boolean") {
      bool++;
    }
    if (typeof arreglo[i] === "undefined") {
      und++;
    }
    if (typeof arreglo[i] === "object") {
      obj++;
    }
  }
  console.log("numero: " + num);
  console.log("string: " + pal);
  console.log("boolean: " + bool);
  console.log("undifined: " + und);
  console.log("object: " + obj);
}
