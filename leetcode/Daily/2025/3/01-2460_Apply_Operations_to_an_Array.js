// 같으면 전꺼에 *2 하고 현재꺼 0으로 하는 포문 돌고, 마지막 포문 0을 오른쪽으로 옮겨줘라

const nums = [847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272]
// Output: [1,4,2,0,0,0]
// Explanation: We do the following operations:
//     - i = 0: nums[0] and nums[1] are not equal, so we skip this operation.
// - i = 1: nums[1] and nums[2] are equal, we multiply nums[1] by 2 and change nums[2] to 0. The array becomes [1,4,0,1,1,0].
// - i = 2: nums[2] and nums[3] are not equal, so we skip this operation.
// - i = 3: nums[3] and nums[4] are equal, we multiply nums[3] by 2 and change nums[4] to 0. The array becomes [1,4,0,2,0,0].
// - i = 4: nums[4] and nums[5] are equal, we multiply nums[4] by 2 and change nums[5] to 0. The array becomes [1,4,0,2,0,0].
//     After that, we shift the 0's to the end, which gives the array [1,4,2,0,0,0].

// 리버스 한다음에 팝을 해주고, 0 이면 냅두고 아니면 푸시한다. 0의 개수는 계속 카운팅 해준다.
// 겹치면 전에 팝 해주고, 0 카운팅 하고 현재 얘를 * 2 한 뒤 푸시함
var applyOperations = function (nums) {
    const arr = nums.reverse()
    const result = []
    const zeroArr = []
    let prev = -1

    console.log(arr)
    while (arr.length) {
        let curr = arr.pop()
        if (curr === 0) {
            zeroArr.push(curr)
        } else if (curr === prev) {
            result[result.length - 1] *= 2
            curr = 0
            zeroArr.push(curr)
        } else {
            result.push(curr)
        }
        prev = curr
    }


    return [...result, ...zeroArr]
};

console.log(applyOperations(nums));