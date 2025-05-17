// sort 직접 구현

const nums = [2, 0, 2, 1, 1, 0]
// Output: [0,0,1,1,2,2]

// 1 <= n <= 300 어떤 정렬을 쓰든 시간은 비슷함
// 퀵 ㄱㄱ
// 리턴 값 없는 대신 원본 변경시켜야함
// 30분
const tripleVeryHardQuickSort = (arr) => {
    if (arr.length <= 1) return arr

    const left = []
    const middle = []
    const right = []

    const average = arr[Math.floor(arr.length / 2)]

    for (const e of arr) {
        if (e < average) left.push(e)
        else if (e > average) right.push(e)
        else middle.push(e)
    }

    return [...tripleVeryHardQuickSort(left), ...middle, ...tripleVeryHardQuickSort(right)]
}

var sortColors = function (nums) {
    const arr = tripleVeryHardQuickSort(nums)

    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i]
    }
};

console.log(sortColors(nums))
console.log(nums)