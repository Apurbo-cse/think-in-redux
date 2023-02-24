const array = [1, 2, 3, 4, 5];
array.reduce((previusResult, currentValue) => {
  return previusResult + currentValue;
}, 0);
