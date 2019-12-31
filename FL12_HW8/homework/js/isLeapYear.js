function isLeapYear(str) {
  const year = new Date(str).getFullYear();
  if (isNaN(year)) {
    return 'Invalid Date';
  }
  return new Date(year, 1, 29) === 29 ? `${year} is a leap year.` : `${year} is not leap year.`;
}

isLeapYear('2020-01-01 00:00:00');
