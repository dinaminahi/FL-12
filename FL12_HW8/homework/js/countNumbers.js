function makeNumber(str) {
  let numbers = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(+str[i])) {
      numbers += str[i];
    }
  }
  return numbers;
}

function countNumbers(str) {
  let numbers = makeNumber(str);
  let numbersObj = {};
  for (let i = 0; i < numbers.length; i++) {
    numbersObj[numbers[i]] = numbers.split(numbers[i]).length - 1;
  }
  return numbersObj;
}

countNumbers('932hiehfielhf828299');
