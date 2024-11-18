// k 음수면 이 전 값들의 합 양수면 이 후 값들의 합 0이면 걍 0

const code = [2, 4, 9, 3],
  k = -2;
// Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

// 0 1 2 3, -일시 + n
var decrypt = function (code, k) {
  const n = code.length;
  const result = [];

  const light = () => {
    for (let i = 0; i < n; i++) {
      let sum = 0;
      if (k === 0) {
        result.push(sum);
        continue;
      }
      for (let j = i + 1; j < k + i + 1; j++) {
        sum += code[j % n];
        console.log(sum);
      }

      result.push(sum);
    }
    return result;
  };

  const luringShadow = () => {
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = i - 1; j > i - 1 + k; j--) {
        // -1 -2  n+j 3 2
        // 0 -1  3
        const num = j < 0 ? n + j : j;
        sum += code[num];
      }

      result.push(sum);
    }
    return result;
  };

  return k < 0 ? luringShadow() : light();
};

console.log(decrypt(code, k));
