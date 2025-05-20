// 별이랑 별왼쪽 지워서 반환

const s = "leet**cod*e"
// Output: "lecoe"
// Explanation: Performing the removals from left to right:
//     - The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
// - The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
// - The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
//     There are no more stars, so we return "lecoe".

// 왼쪽부터 반복문을 돌다가 char 를 stack 에 푸시
// 별을 만나면 스택 맨 마지막에 있는 요소를 제거
// 5분
var removeStars = function (s) {
    const stack = []

    for (const char of s) {
        if (char === "*" && stack.length > 0) stack.pop()
        else stack.push(char)
    }

    return stack.join("")
};

console.log(removeStars(s))