// 배열의 모든 요소를 0으로 만들고 남는 쿼리의 개수 0만들기 실패시 -1

const nums = [2, 0, 2], queries = [[0, 2], [0, 2], [1, 1]]
// Output: 1
// Explanation:
//     After removing queries[2], nums can still be converted to a zero array.
//     Using queries[0], decrement nums[0] and nums[2] by 1 and nums[1] by 0.
//     Using queries[1], decrement nums[0] and nums[2] by 1 and nums[1] by 0.

// 존나 어려운 문제다 신중하게 설계하자
// nums 의 요소 하나하나 0 으로 만들수 있는 쿼리를 찾아내야함
// 요소의 인덱스보다 query 의 [1] 이 크거나 같다면 감소 가능함 => 쿼리를 [1]내림차순으로 본래 인덱스와 함께 정렬, 요소 인덱스 끝부터 반복문 돌린다.(쿼리 정렬시 [1]이 같다면 본래 인덱스가 낮은 얘를 우선순위 해주면 좋음)
// 문제는 쿼리를 찾아 감소를 시켰을 때 영향받는 다른 요소들을 어떻게 해줄지임 => 선택 요소가 0 될때까지 쿼리 돌리고 프리픽스 함수를 만들어서 영향받는 요소들에 적용. 프리픽스는 쿼리의 본래 인덱스까지의 범위에 속한 쿼리까지 적용해줌
// 다시, nums 끝에서부터 반복문 계속 진행해서 0이 아닌 얘들을 찾아서 수행함 와중, 요소가 0이 아닌데 적절한 쿼리를 찾지못하면 바로 -1 반환
// TODO: 벽, 쿼리 원본인덱스 처리 어케 해야하는지 도저히 모르겠어
var maxRemoval = function (nums, queries) {
    // 현재의 개수가 가능한지 nums 를 모두 0으로 만드는게
    const canQuery = (count, nums) => {
        const copyNums = nums.slice()
        const usedQueries = new Set()

        for (let i = 0; i < copyNums.length; i++) {
            const sortedQueries = queries.filter(([start, end], idx) => start <= i && i <= end && !usedQueries.has(idx)).sort((a, b) => a[1] - b[1])

            // 쿼리[0] 선택 후 차분 배열로, 쿼리사용 횟수는 요소의 값에 따름
            const num = copyNums[i]
            const arr = Array(nums.length + 1).fill(0)

            for (let j = 0; j < num; j++) {
                const [start, end] = sortedQueries.pop()
                count--
                if (count < 0) return false

                arr[start]--
                arr[end + 1]++
            }

            copyNums[0] -= arr[0]
            let zeroCount = 0

            for (let k = 1; k < arr.length - 1; k++) {
                arr[k] += arr[k - 1]
                copyNums[k] -= arr[k]
                if (copyNums[k] <= 0) zeroCount++
            }

            if (zeroCount === copyNums.length) return true
        }

        return false
    }

    let left = 0
    let right = queries.length

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2)
        // 펄스면 현재의 개수가 불가능하니 개수를 늘려줘야햐해
        if (canQuery(mid, nums)) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    console.log(left, right)

};


console.log(maxRemoval(nums, queries))