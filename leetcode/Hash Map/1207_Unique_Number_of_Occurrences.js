// 요소 발생횟수가 고유한지 체크

const arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// map 에 num => count
// 내가 하고싶은 것: 첫번째 반복문에서 결과 반환(map 키핑과정)
// 불가능함. 반복문 끝내고, 밸류 값들을 각각 set 과 value 에 저장 후 길이 비교
// 8분
var uniqueOccurrences = function (nums) {
    const map = new Map()

    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1)
    }

    const arr = [...map.values()]
    const set = new Set(arr)

    return arr.length === set.size
};

console.log(uniqueOccurrences(arr));