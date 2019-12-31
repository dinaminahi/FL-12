function makeNumber(str) {
  let numbers = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(+str[i])) {
      numbers += str[i];
    }
  }
  return numbers;
}

makeNumber('25hhgud6648');
