function loopyLighthouse(range, multiples, words) {
  var min = range[0];
  var max = range[1];
  var firstReplace = Number(multiples[0]);
  var secondReplace = Number(multiples[1]);

  for (var i = min; i <= max; i++) {
    if ((i % firstReplace === 0) && (i % secondReplace === 0)) {
      console.log(words[0] + words[1]);
    }
    else if (i % secondReplace === 0) {
      console.log(words[1]);
    }
    else if (i % firstReplace === 0) {
      console.log(words[0]);
    }
    else {
      console.log(i);
    }
  }
}
console.log(loopyLighthouse([1, 100], [2, 5], ["dogs", "cats"]));