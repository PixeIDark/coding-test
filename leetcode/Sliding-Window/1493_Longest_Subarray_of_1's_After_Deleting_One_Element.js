// 요소 하나 삭제시 1이 가장 큰 부분 배열 길이

const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

// 포문 돌다가 0 만나면 한 번은 건너뛸 수 있게 만들어주고, 다시 1을 만날 경우 거기서 부터 순수 1의 개수를 0 만날때까지 저장
// 또 0 만나게 되면 맥스 값 업데이트하고, 카운팅을 순수 1의 개수를 할당해서 시작함
// 32분
var longestSubarray = function (nums) {
    let curr = 0
    let prev = 0
    let max = 0
    let hasZero = false

    for (const num of nums) {
        if (num === 1) curr++
        else {
            max = Math.max(max, prev + curr)
            prev = curr
            curr = 0
            hasZero = true
        }
    }

    max = Math.max(max, prev + curr)

    return hasZero ? max : max - 1
};

console.log(longestSubarray(nums));