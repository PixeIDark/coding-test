// operation 0, 원본을 복사해서 그대로 덧붙임
// operation 1, 원본을 복사해서 code + 1 을 한 뒤 덧붙임
// z => a
// k 번째의 char를 출력
// 1. 최종 단어 변수
// 2. 복사체에 최종 단어 변수 할당
// 3. 1일 경우 복사체 변형. 아니면 그대로 덧붙임
// 문자열의 길이는 2 ^ n - 1 로 증가함
// k는 몇단계에서 덧붙일 문자열의 몇번째인지 구해야함
// 직접 만들지 않고 수학적인 방법으로
// TODO: 벽, k의 위치만 추론 가능하고, 무슨 문자열인지는 도저히 못구하겠음
var kthCharacter = function (k, operations) {
    let str = "a"
    let i = 0

    while (str.length < k) {

        if (operations[i] === 0) {
            str += str
            i++
            continue
        }

        let copyStr = ""

        for (const char of str) {
            const num = char.charCodeAt(0) - 97

            copyStr += String.fromCharCode(((num + 1) % 26) + 97)
        }

        str += copyStr
        i++
    }

    return str[k - 1]
};