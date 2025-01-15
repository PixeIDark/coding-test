// x 구하기. num2와 동일한 수의 세트 비트를 가진 x 가 x XOR num1 = 최소값 이 되게 하는 x
// 세트 비트란 1의 개수임

const num1 = 3,
  num2 = 5;
// Output: 3
// Explanation:
//     The binary representations of num1 and num2 are 0011 and 0101, respectively.
//     The integer 3 has the same number of set bits as num2, and the value 3 XOR 3 = 0 is minimal.

// 1 = 1
// 12 = 1100
// 0010 = 2
// [1,1,0,0]
// 비트 공부 더 하자..
var minimizeXor = function (num1, num2) {};

// var minimizeXor = function (num1, num2) {
//     // num2의 1의 개수 세기
//     let setBitsCount = 0;
//     let tempNum2 = num2;
//     while(tempNum2 > 0) {
//         if(tempNum2 & 1) setBitsCount++;
//         tempNum2 >>= 1;
//     }
//
//     // num1의 비트 길이 계산
//     let length = Math.max(
//         num1.toString(2).length,
//         Math.ceil(Math.log2(setBitsCount + 1))
//     );
//
//     // num1을 이진수 배열로 변환 (앞에 0을 채워서)
//     let binary1 = num1.toString(2).padStart(length, '0').split('').map(Number);
//     let result = new Array(length).fill(0);
//
//     // 1. num1의 1인 비트 위치에 우선적으로 1 배치
//     for(let i = 0; i < length && setBitsCount > 0; i++) {
//         if(binary1[i] === 1) {
//             result[i] = 1;
//             setBitsCount--;
//         }
//     }
//
//     // 2. 남은 1들을 오른쪽부터 0인 위치에 배치
//     for(let i = length - 1; i >= 0 && setBitsCount > 0; i--) {
//         if(result[i] === 0) {
//             result[i] = 1;
//             setBitsCount--;
//         }
//     }
//
//     // 3. 만약 아직도 1이 남았다면, 새로운 자리를 추가
//     while(setBitsCount > 0) {
//         result.unshift(1);
//         setBitsCount--;
//     }
//
//     return parseInt(result.join(''), 2);
// }

console.log(minimizeXor(num1, num2));
