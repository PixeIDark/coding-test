// 문자열에서 동일숫자로 이루어진 세자리숫자중 가장 큰 거 출력(String)
// 8분
var largestGoodInteger = function (num) {
    const n = num.length
    let max = ""

    for (let i = 0; i < n - 2; i++) {
        if (num[i] === num[i + 1] && num[i + 1] === num[i + 2] && Number(num[i]) > Number(max[0] ?? -1)) {
            max = num[i] + num[i + 1] + num[i + 2]
        }
    }

    return max
};