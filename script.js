// CH3 EX1
function minimum(a, b) {
  if (a < b) {
    return 'Minimum is' + a
  } else if (a > b) {
    return 'Minimum is' + b
  } else {
    return 'Those numbers are equal.'
  }
}

console.log(minimum(5, 1));
console.log(minimum(1, 1));

// CH3 EX2
function isEven(number) {
  if (number >= 0) {
    if (number == 0) {
      return true
    } else if (number == 1) {
      return false
    } else {
      return isEven(number - 2)
    }
  } else {
    return isEven(number + 2)
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//CH3 EX3
function countBs(string) {
  let BCount = 0;
  for (let letter of string) {
    if (letter === 'B') {
      BCount += 1;
    }
  }
  return BCount;
}

console.log(countBs('aaaBBBa'));

function countChar(string, character) {
  let BCount = 0;
  for (let letter of string) {
    if (letter === character) {
      BCount += 1;
    }
  }
  return BCount;
}

function countAs(string) {
  return countChar(string, 'A');
}

console.log(countChar('aaaBBBa', 'B'));
console.log(countChar('aaaBBBa', 'a'));
console.log(countAs('aaaBBBaAAAA'));

