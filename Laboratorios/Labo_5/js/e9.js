function nueve() {
  var radio = window.prompt("Inserte el radio de la circunferencia: ");

  if (radio < 0) {
    return -1;
  }
  return Math.PI * Math.pow(radio, 2);
}
