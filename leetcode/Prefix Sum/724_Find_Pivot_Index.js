// 기준 인덱스 좌측 모든 합 우측 모든 합이 같아야함 기준 인덱스 찾기(가장 왼쪽)

const nums = [2, 1, -1]
// Output: 3
// Explanation:
//     The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Total 을 구한 뒤 반복문 돌면서 현재값 * 2 = total 이면 해당 인덱스 반환 -1
// total 이 아님. 요소 하나는 평가에서 제외되기 때문
// total 에서 현재 요소를 뺀값을 기준으로 해야함
// 8분
var pivotIndex = function (nums) {
    const total = nums.reduce((a, b) => a + b, 0)
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        if (sum * 2 === total - nums[i]) return i

        sum += nums[i]
    }

    return -1
};

console.log(pivotIndex(nums))