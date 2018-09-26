var args = process.argv.slice(2);
function obfuscate(string) {
  var nextString = "";
  for (i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
      nextString += 4;
      break;

      case "e":
      nextString += 3;
      break;

      case "o":
      nextString += 0;
      break;

      case "l":
      nextString += 1;
      break;

      default:
      nextString += string[i];
    }
  }
  return nextString
}
console.log(obfuscate(args[0]));