// 무슨 삼각형이 되는지 종류 출력 안되면 none

const nums = [3, 4, 5]
// Output: "equilateral"
// Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.

// 삼각형 형성 조건: [100, 1, 1] 일 때 형성이 불가능함. max < ...나머지의 합, 이게 되야함
// 정삼각형: 세번의 길이가 모두 같음
// 이등변삼각형: 두변의 길이가 같음
// 1. 삼각형 되는지 여부 => max < num1 + num2 어떤 요소든지 나머지 요소의 합 보다 작아야함 max 는 토탈의 절반 미만이여야함
// 2. 삼각형 종류 살펴보기 => 모두 이프문으로 처리
// 16분
var triangleType = function (nums) {
    let total = nums.reduce((a, b) => a + b)
    let max = Math.max(...nums)

    if (total / 2 <= max) return "none"

    const setSize = new Set(nums).size

    return setSize === 1 ? "equilateral" : setSize === 2 ? "isosceles" : "scalene"
};

console.log(triangleType(nums))