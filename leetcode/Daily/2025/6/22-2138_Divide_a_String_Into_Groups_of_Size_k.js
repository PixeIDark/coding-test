// s 를 k 사이즈의 s로 분할해서 배열로 반환
// 마지막 요소의 사이즈가 모자라면 fill 로 채움
// 12분 "s": 반복할 문자.repeat(n: 반복횟수) 쓰거나 slice or substring 으로 건너띄면 좋음
var divideString = function (s, k, fill) {
    // 나머지가 0 이 아닌 경우 k - 나머지 만큼 fill 을 더해줌
    const n = s.length
    const fillCount = n % k === 0 ? 0 : k - (n % k)
    const result = []
    let str = ""

    for (let i = 0; i < n + fillCount; i++) {
        // char 언디파인드이면 fill로 대신함
        const char = s[i] ?? fill
        str += char

        if (str.length === k) {
            result.push(str)
            str = ""
        }
    }

    return result
};