// 쌍 k 개 이상인 부분 배열 개수

const nums = [1, 1, 1, 1, 1], k = 10
// Output: 4
// Explanation: There are 4 different good subarrays:
// - [3,1,4,3,2,2] that has 2 pairs.
// - [3,1,4,3,2,2,4] that has 3 pairs.
// - [1,4,3,2,2,4] that has 2 pairs.
// - [4,3,2,2,4] that has 2 pairs.

// 슬라이딩 윈도우로 k에 부합하는 거 찾는다.
// 맨왼쪽 시작해서 오른쪽으로 가야함
// 슬라이딩 윈도우를 최소한의 크기 k
// 왼쪽 남은 인덱스 + 1 * 오른쪽 남은 인덱스 + 1 = count
// 그 후
// TODO: 벽
var countGood = function (nums, k) {
    // 이 개수를 저장하는 map 이있는데 최소 인덱스와 최대인덱스를 저장해야함 쌍이면
    // 즉, num <= 2 면 얘는 max 인덱스에 기록함
    // num 3 이면 3쌍인거다 2면 1쌍이고
    // 처음 num = 2 달성하는 얘 있으면 얘만 min 인덱스 기록
    const map = new Map()
    let result = 0
    let pairs = 0

    // 무조건 r 증가시키고 조건이 충족되면 그때부터 l을 감소시키면서 최소 지점을 찾아야함
    let left = 0
    let right = 0

    while (right < nums.length) {
        const count = map.get(nums[right]) ?? 0
        pairs += count
        map.set(nums[right], count + 1)

        while (pairs >= k && left <= right) {
            // left 기준으로해서 필요없는얘 제거해야함
            result += nums.length - right

            const leftCount = map.get(nums[left])
            // 56 42 30 20 12
            pairs -= leftCount - 1
            map.set(nums[left], leftCount - 1)
            left++
        }

        right++
    }

    return result
};

console.log(countGood(nums, k))