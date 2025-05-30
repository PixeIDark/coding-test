// 이분 탐색은 아니다
// 정렬을 시켜야하나? 아니다
// 한 요소를 골라서 주변 이웃을 탐색해보고
// 큰 요소가 있으면 해당 요소로 곧바로 탐색
// 큰 요소가 두개면, 큐에 집어넣어서 둘다 탐색
// 첫 탐색에서만 큰 요소가 둘 나올 수 있음
// 14분
var findPeakElement = function (nums) {
    const stack = [Math.floor(nums.length / 2)]

    while (stack.length) {
        const i = stack.pop()

        const mid = nums[i]
        const left = nums[i - 1] ?? -Infinity
        const right = nums[i + 1] ?? -Infinity

        if (mid > left && mid > right) return i

        if (mid < left) stack.push(i - 1)

        if (mid < right) stack.push(i + 1)
    }


};