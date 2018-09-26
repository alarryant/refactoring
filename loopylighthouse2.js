function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    console.log(replaceWord(i, multiples, words))
  }

function replaceWord(increment, multiples, words) {
  var newString = '';
    if (increment % multiples[0] === 0) {
      newString += words[0];
    }
    if (increment % multiples[1] === 0) {
      newString += words[1];
    }
    if (newString === '') {
      newString = increment
    }
    return newString;
  }
}

console.log(loopyLighthouse([1, 100], [2, 5], ["dogs", "cats"]));