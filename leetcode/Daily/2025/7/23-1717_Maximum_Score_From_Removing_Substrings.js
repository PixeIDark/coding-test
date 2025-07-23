// "ab" 제거시 x 포인트
// "ba" 제거시 y 포인트
// 둘 중에 높은 포인트 조건 우선적으로 처리
// "a", "b" 만 식별하는 로직
// "baaabbba"
// "ab" 우선 기준으로 스택의 마지막 값과 현재 들어올 char 가 다르면 pop 아니면 푸시
// 스택의 남은 값들은 "a", "b" 중 최소치 개수를 기준으로 "ba" 포인트 * count 를 추가 <= 안됨 중간에 제3 char 끼어서
// 30분
var maximumGain = function (s, x, y) {
    const max = Math.max(x, y)
    const min = Math.min(x, y)
    const rule = max === x ? "ab" : "ba"
    // x 포인트가 크면 "ab" 우선적으로 계산, 아니면 "ba" 우선적으로 계산
    // 스택에서 판별시에는 인덱스로
    let stack = []
    let sum = 0

    for (const char of s) {
        if (stack.length && stack[stack.length - 1] === rule[0] && char === rule[1]) {
            stack.pop()
            sum += max
        } else {
            stack.push(char)
        }
        // 스택에 남은 후순위들 계산해야함 이것을 어떻게 우아하게 할까? 걍 한번 더?
    }

    s = stack
    stack = []

    for (const char of s) {
        if (stack.length && stack[stack.length - 1] === rule[1] && char === rule[0]) {
            stack.pop()
            sum += min
        } else {
            stack.push(char)
        }
    }

    return sum
};