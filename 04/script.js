//CH4 EX 1 THE SUM OF RANGE

function range(start, end, step = 1) {
  const array = []
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

function sum(array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum;
}

console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(5, 2, -1)));

//CH4 EX2 REVERSING AN ARRAY

function reverseArray(array) {
  const newArray = [];
  for (let item of array) {
    newArray.unshift(item);
  }
  return newArray;
}

console.log(reverseArray([1, 2, 3]));

function reverseArrayInPlace(array) {
  for (let i = 0; i < ((array.length) / 2); i++) {
    let item = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = item;
  }
  return array;
}

console.log(reverseArrayInPlace([1, 2, 3]));
console.log(reverseArrayInPlace(range(1, 10)));

//CH4 EX3 A LIST

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list }
  }
  return list
}

console.log(arrayToList([10, 20]));
console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}

function listToArray(list) {
  const array = [];
  for (let i = list; i; i = i.rest) {
    array.push(i.value);
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30, 40, 50])));
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

function prepend(value, list) {
  return { value, rest: list };
}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

function nth(list, number) {
  let iteration = 0;
  for (let i = list; i; i = i.rest) {
    if (iteration == number) {
      return i.value;
    }
    iteration++;
  }
}
console.log(nth(arrayToList([10, 20, 30]), 4));
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20