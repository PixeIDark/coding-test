// 중복된 숫자, 안나온 숫자 반환

const grid = [[1, 13, 8, 9], [5, 2, 5, 16], [12, 6, 15, 3], [14, 4, 11, 7]]
// Output: [9,5]
// Explanation: Number 9 is repeated and number 5 is missing so the answer is [9,5].

// 키 값 숫자인 객체 만들고, 기본 값 1
// 그리드 돌다가 잇으면 삭제, 마지막 남은 키 한개가 안나온놈
// 반면, 없으면 생기게 해줌 그게 중복된 숫자.
var findMissingAndRepeatedValues = function (grid) {
    const result = []
    const arr = grid.flat().sort((a, b) => a - b)
    const n = arr.length
    const final = arr[arr.length - 1]
    // pop 으로 마지막 얘랑 비교해주기 같으면 [0] 으로 pop가고, 다르면 pop -1 [1]로 간다(오름차기준)
    // 내림차면 같으면 [0] 으로 pop 가고, 다르면 pop +1 [1] ㄱㄱ
    // 112345678     마지막에 대처하자

    while (arr.length && result.length < 2) {
        const num = arr.pop()
        const target = arr[arr.length - 1]

        if (num === target) result.unshift(num)
        else if (num - 2 === target) result.push(num - 1)
    }
    // 12334 23345 이런 경우 처음이나 끝 숫자 푸시 해주면됨
    if (result.length === 2) return result

    if (final === n) result.push(1)
    else result.push(n)
    
    return result
};

console.log(findMissingAndRepeatedValues(grid))