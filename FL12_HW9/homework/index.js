function convert() {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'string') {
      arguments[i] = parseInt(arguments[i]);
    } else {
      arguments[i] = arguments[i] + '';
    }
  }
  return [...arguments];
}

function executeforEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

function mapArray(arr, func) {
  let newArr = [];
  executeforEach(arr, (el) => newArr.push(func(Number(el))));
  return newArr;
}

function filterArray(arr, func) {
  let filteredArr = [];
  executeforEach(arr, function(el) {
    if (func(el)) {
      filteredArr.push(el);
    }
  });
  return filteredArr;
}

function flipOver(str) {
  let fliped = '';
  for (let i = str.length - 1; i >= 0; --i) {
    fliped += str[i];
  }
  return fliped;
}

function makeListFromRange(arr) {
  let list = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    list.push(i);
  }
  return list;
}

function getArrayOfKeys(objects, key) {
  let keys = [];
  executeforEach(objects, (object) => keys.push(object[key]));
  return keys;
}

function substitute(arr) {
  return mapArray(arr, (el) => el < 30 ? '*' : el);
}

function getPastDay(date, days) {
  const pastDate = new Date(date - new Date(days * 84500000)).getDate();
  return pastDate;
}

function formatDate(date) {
  return `${date.getFullYear()}\\${date.getMonth() + 1}\\${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}
