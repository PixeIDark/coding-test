// 자릿 수가 짝수인 요소들 개수 출력

const nums = [12, 345, 2, 6, 7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

// 걍 요소 하나하나 length 찾아서 하면 되는데.. 더 있나?
// 1.
// number => string 으로 전환
// string 의 length 를 보고 판단함
// 2.
// % 10, /10 을 활용해서 자릿수를 알아낸다
// 10 <= num < 100, 1000 <= num < 10000,
var findNumbers = function (nums) {
    return nums.filter(num => String(num).length % 2 === 0).length
};

console.log(findNumbers(nums));