// 자릿수 숫자 재배열해서 2의 거듭제곱인지 체크
// 218 과 같은 자리수 숫자들은 128, 256, 512가 있음
// 218의 요소들은 2, 1, 8 해당 요소를 모드 포함하는 128이 존재하므로 트루임
// 1. n 을 배열로 만들고 정렬
// 2. 거듭제곱을 배열로 만들고 정렬 후 비교
// 35분
var reorderedPowerOf2 = function (n) {
    const target = String(n).split("").map(Number).sort((a, b) => a - b)

    for (let i = 0; i <= Infinity; i++) {
        const number = Math.pow(2, i)
        const digit = String(number).split("").map(Number).sort((a, b) => a - b)

        if (digit.length < target.length) continue
        if (digit.length > target.length) return false

        let isMatch = true

        for (let j = 0; j < target.length; j++) {
            if (digit[j] !== target[j]) {
                isMatch = false
                break;
            }
        }

        if (isMatch) return true
    }

    return false
};