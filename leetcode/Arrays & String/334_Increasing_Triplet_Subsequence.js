// 길이 3이상인 오름차 부분수열 존재하는지

const nums = [2, 1, 7, 4, 5]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// [9, 1, 3, 4] [3, 9 ,2, 1]
// [i] 를 선택하고 [i] 보다 큰 값들을 정렬 시켰을 때 [length - 1](가장 큰 값) 이 원본 인덱스가 [0]만 아니면됨
// 47분
var increasingTriplet = function (nums) {
    let first = Infinity
    let second = Infinity

    for (const num of nums) {
        if (num <= first) first = num
        else if (num <= second) second = num
        else return true
    }

    return false
};

console.log(increasingTriplet(nums))