function cinco(text) {
  var reversedText = text
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  return text === reversedText;
}
