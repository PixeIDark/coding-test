// k 이하여야되 부분 문자열내 char의 종류가
// 항상 최대한 길게 잘라내야하고, 인덱스 하나를 바꿔서 최대한 많은 부분 집합을 만들어야함.
// 즉, k 초과하는 부분 집합을 많이 만들면됨
// 부분 집합 개수 반환
// k가 26이면 무조건 1일듯 반면 1이면 무조건 s.length
// 인덱스 어느 곳을 변경하든 최대 고점은 최소1은 되것지
// 1. 인덱스 변경 하지 않고, 부분집합 나누기
// 2. 각 부분집합 후입선출로 확인, 쪼갤수 있는 지점 찾으면 length + 1 반환
// TODO: 벽
var maxPartitionsAfterOperations = function (s, k) {
    const n = s.length
    const stack = []
    let str = ""
    let set = new Set()

    for (const char of s) {
        set.add(char)
        str += char
        console.log(set.size)
        if (set.size > k) {
            stack.push(str)
            set = new Set()
            str = ""
        }
    }

    if (set.size) stack.push(str)

    console.log(stack)

};