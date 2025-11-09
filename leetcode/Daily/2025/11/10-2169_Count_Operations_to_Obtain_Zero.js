// 3분
var countOperations = function (num1, num2) {
  let result = 0;

  while (num1 !== 0 && num2 !== 0) {
    if (num1 >= num2) num1 -= num2;
    else num2 -= num1;

    result++;
  }

  return result;
};