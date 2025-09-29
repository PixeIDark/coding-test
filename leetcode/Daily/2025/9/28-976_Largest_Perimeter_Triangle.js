// 가장 큰 변 a, 나머지 변 b, c
// 삼각형 조건: a < b + c, 만족하는 삼각형중 세 변의 합이 가장 큰 삼각형의 둘레 반환. 없으면 0
// 내림차순으로 정렬, 잠재력의 최대치는 [0] * 2 - 1임. 즉, 가장 큰변 a * 2 - 1
// 최대치면 즉시 브레이크 후 반환
// a < b + c 만족 못하면 바로 i++. 반복문에서 저 조건 충족하면 바로 반환하면됨
// 9분
var largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a)
    const n = nums.length

    for (let i = 0; i < n - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) return nums[i] + nums[i + 1] + nums[i + 2]
    }

    return 0
};