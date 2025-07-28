// 최대 or 부분집합개수 출력
// 인덱스가 다르면 다른 집합으로 간주
// 1. or 연산은 무한중첩을해도 최소한 작아지지는 않음 => 전체 배열 or로 최대 값 구하기
// 2. 연산 중 최대 값에 도달하면 남은 반복 횟수 += 결과에 반영
// 33분
var countMaxOrSubsets = function (nums) {
    const n = nums.length
    const max = nums.reduce((a, b) => a | b, 0)
    let count = 0

    const bt = (index, sum) => {

        if (index === n) {
            if (sum === max) count++
            return
        }

        bt(index + 1, sum | nums[index])
        bt(index + 1, sum)

    }

    bt(0, 0)

    return count
};