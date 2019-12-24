const a = Number(prompt('a = '));
const b = Number(prompt('b = '));
const c = Number(prompt('c = '));
const discriminantCoef = 4;
const coefForCalc = 2;

if (a !== null && b !== null && c !== null) {
  if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== 0) {
    const discriminant = Math.pow(b, coefForCalc) - discriminantCoef * a * c;
    if (discriminant < 0) {
      console.log('No solution');
    } else if (discriminant === 0) {
      const x = -b / coefForCalc * a;
      console.log(`x = ${Math.round(x)}`);
    } else {
      const x1 = (-b + Math.sqrt(discriminant)) / coefForCalc * a;
      const x2 = (-b - Math.sqrt(discriminant)) / coefForCalc * a;
      console.log(`x1 = ${Math.round(x1)} and x2 = ${Math.round(x2)}`);
    }
  } else {
    console.log('Invalid input data');
  }
} else {
  console.log('Invalid input data');
}
