function siete(num) {
  var num1 = 0;
  var num2 = 1;
  var num3;

  console.log(num1 + " " + num2 + " ");
  for (var i = 3; i <= num; i++) {
    num3 = num1 + num2;

    num1 = num2;

    num2 = num3;

    console.log(num3 + " ");
  }
}
