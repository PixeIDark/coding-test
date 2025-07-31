// 연속된 하위 배열의 모든 or 값 중복 없는 개수 출력
// dp = [1, 1, 1]
// 31분
var subarrayBitwiseORs = function (arr) {
    const zeroValue = 1 - arr.includes(0);
    const set = new Set([0]);

    for (const num of arr) {

        for (const s of set) {
            set.add(num | s);
        }

    }

    // arr에 0 없으면 - 1 아니면 그대로 출력
    return set.size - zeroValue
}