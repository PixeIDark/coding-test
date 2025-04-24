// 고유한 부분배열이면 카운팅해라, 부분 배열은 연속된다.

const nums = [5, 5, 5, 5]
// Output: 4
// Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].

// 고유 숫자들이 모인 배열 구간을 찾고, 왼쪽과 오른쪽의 남은 요소들의 개수를 이용해 결과 값을 추론하자.
var countCompleteSubarrays = function (nums) {
    // right 값을 증가시키며 고유 숫자들을 찾는다.
    // 찾으면 한계까지 left 값을 중가시켜서 길이를 최소화한다.
    // left 와 right 값을 토대로 요소들의 개수를 찾는다
    // 여기서 끝내는게 아니라 혹시 고유조건이 또 있는지 left 증가시켜서 고의로 조건 탈락 시킨 후 right 를 계속 증가시켜서 찾아본다 없으면 종료
    const n = nums.length
    const uniqueNumbers = new Set(nums)
    const numberCounts = new Map()
    let left = 0
    let right = 0
    let result = 0

    while (right < n) {
        const addNum = nums[right]
        numberCounts.set(addNum, (numberCounts.get(addNum) ?? 0) + 1)

        while (numberCounts.size === uniqueNumbers.size) {
            // 이 조건이 될떄마다 right 와 length 차이를 토대로 결과 값 계산
            const diff = n - right
            result += diff

            const deleteNum = nums[left]
            numberCounts.set(deleteNum, numberCounts.get(deleteNum) - 1)
            if (numberCounts.get(deleteNum) === 0) numberCounts.delete(deleteNum)
            left++
        }

        right++
    }
    
    // 포문쓰면 더 짧아질듯
    return result
};

console.log(countCompleteSubarrays(nums))