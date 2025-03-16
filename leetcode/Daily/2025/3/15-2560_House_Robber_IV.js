// 최소 금액훔치는 경우의 수에서 최대 금액을 훔친 집의 값 출력

const nums = [5038, 3053, 2825, 3638, 4648, 3259, 4948, 4248, 4940, 2834, 109, 5224, 5097, 4708, 2162, 3438, 4152, 4134, 551, 3961, 2294, 3961, 1327, 2395, 1002, 763, 4296, 3147, 5069, 2156, 572, 1261, 4272, 4158, 5186, 2543, 5055, 4735, 2325, 1206, 1019, 1257, 5048, 1563, 3507, 4269, 5328, 173, 5007, 2392, 967, 2768, 86, 3401, 3667, 4406, 4487, 876, 1530, 819, 1320, 883, 1101, 5317, 2305, 89, 788, 1603, 3456, 5221, 1910, 3343, 4597],
    k = 28
// Output: 2
// Explanation: There are 7 ways to rob the houses. The way which leads to minimum capability is to rob the house at index 0 and 4. Return max(nums[0], nums[4]) = 2.

// k 번 훔칠수 있음. 인접한 집은 못텀.
// 오름차정렬, 기존 인덱스 표시.
// 넣을때마다 기존 인덱스 기준으로 기록해놓고, 타겟 인덱스 +1 -1 헤서 있나 확인.
var minCapability = function (nums, k) {
    const n = nums.length
    const vis = Array(n).fill(0)
    const arr = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0])
    const maxK = Math.ceil(n / 2)
    let result = 0
    let count = 0

    console.log(arr, n)
    // 1. k 가 nums.length / 2 올림일 경우 무조건 짝수 인덱스만 골라야함.
    for (const [num, idx] of arr) {
        if (maxK === k && n % 2 === 1 && idx % 2 === 1) continue
        console.log(idx)
        if (!vis[idx + 1] && !vis[idx - 1]) {
            vis[idx]++
            result = Math.max(result, num)
            count++
        }

        // 조건에 k는 무조건 다 소진할수 있게되어있음
        if (k === count) return result
    }


};

console.log(minCapability(nums, k))