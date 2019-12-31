function getMin(...args) {
  let min = args[0];
  for (let arg of args) {
    if (arg < min) {
      min = arg;
    }
  }
  return min;
}

getMin(1, 6, -3);
