// num1 num2 곱하면 됨.

const num1 = "123456789",
  num2 = "987654321";
// Output: "56088"

// i 가 증가할 때마다 *10의 보정치 주고
// 단위 넘으면 다음 값에 합산 마지막 인덱스가 아닌 경우에만.
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const arr = new Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const curr = i + j + 1;
      const sum = arr[curr] + num1[i] * num2[j];

      arr[curr] = sum % 10;
      arr[i + j] += Math.floor(sum / 10);
    }
  }

  while (arr[0] === 0) {
    arr.shift();
  }

  return arr.join("");
};

console.log(multiply(num1, num2));
