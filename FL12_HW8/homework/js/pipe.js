function addOne(a) {
  return a + 1;
}

function pipe(num, ...funcs) {
  let result = num;
  for (let i = 0; i < funcs.length; i++) {
    result = funcs[i](result);
  }
  return result;
}

pipe(1, addOne);
