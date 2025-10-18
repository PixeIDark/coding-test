// -k ~ +k 범위를 각 요소에 더하는게 가능.
// 정렬을 우선 시켜야함. 최대 개수는 nums.length
// 가장 작은 얘부터 순회하면서 -k 로 박고 같은얘가 연속으로 나오면 -k += 1
// +k 까지 도달하면 날려
// 78분, 통화중 집중력 폐급
var maxDistinctElements = function (nums, k) {
    nums.sort((a, b) => a - b)

    let prev = -Infinity
    let count = 0

    for (const num of nums) {
        if (prev < num + k) {
            count++
            prev++
        }

        prev = Math.max(prev, num - k)
    }

    return count
};