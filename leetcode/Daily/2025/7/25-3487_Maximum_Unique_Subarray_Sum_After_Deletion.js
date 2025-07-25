// 음수는 모두 삭제
// 겹치는 얘들도 모두 삭제한 다음 합 구하면 되지않나??
// 8분, 지금까지 푼 문제중 가장 설명이 이상하고 비직관적인 문제.
var maxSum = function (nums) {
    const set = new Set(nums.filter((x) => x > 0))

    // set 의 size 가 0 일시 그나마 가장 큰 요소 하나를 출력해야함
    return [...set].reduce((a, b) => a + b, 0) || Math.max(...nums)
};
