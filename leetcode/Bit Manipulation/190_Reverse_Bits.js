// 비트 뒤집기

const n = "00000010100101000001111010011100";
// Output: 964176192(00111001011110000010100101000000);

// 걍무식하게 반대 값을 주자.
var reverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);

    n = n >> 1;
  }

  return result >>> 0;
};

console.log(reverseBits(n));
