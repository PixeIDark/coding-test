// 모든 요소나 일부 요소들을 and 연산하면서 최대값이 나오는 부분배열의 최대길이 배열 개수 반환
// and 연산자는 연산할수록 커지지는 않고 높은 확률로 감소함
// 배열 최대값이 곧 최대치임
// 1. 배열에서 최대값 요소를 탐색
// 2. 최대값과 일치하는 부분배열중 최대 길이들을 탐색
// [1,2,3,3,3,1,2,3,3,3,3] => 4
// 최대값이 가장 연속적으로 나오는 구간이 곧 정답
// 19분
var longestSubarray = function (nums) {
    const maxValue = nums.reduce((a, b) => Math.max(a, b), 1)
    let maxLength = 0
    let currLength = 0

    for (const num of nums) {
        if (num === maxValue) currLength++
        else currLength = 0

        maxLength = Math.max(maxLength, currLength)
    }

    return maxLength
};