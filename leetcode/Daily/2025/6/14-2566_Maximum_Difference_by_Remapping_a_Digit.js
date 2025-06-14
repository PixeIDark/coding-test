// 맨 앞자리 9로 바꾸기 이미 9면 그다음 앞자리 9로 바꾸기.. => 최대?
// 맨 앞자리 0으로 바꾸기 => 최소?
// 맨 앞자리 부터 순회해서 9가 아닌 요소를 찾으면 9로 바꾸고 동일한 요소들을 모두 9로 전환 최대.
// 맨 앞자리 0으로 바꾸고 동일 요소들도 모두 0 으로 바꿈
// 19분
var minMaxDifference = function (num) {
    const str = String(num)
    const n = str.length
    let target = -1

    for (let i = 0; i < n; i++) {
        const digit = Number(str[i])

        if (digit < 9) {
            target = digit
            break
        }
    }

    let max = 0

    for (let i = 0; i < n; i++) {
        const digit = Number(str[i])
        max *= 10

        if (target === digit) max += 9
        else max += digit
    }

    let min = 0
    target = Number(str[0])

    for (let i = 0; i < n; i++) {
        const digit = Number(str[i])
        min *= 10

        if (target === digit) min += 0
        else min += digit
    }

    return max - min
};

// replaceAll 쓰면 편함
var minMaxDifference2 = function (num) {
    const str = String(num).split("")
    let target = str[0]

    const min = str.map((x) => {
        if (target === x) return "0"
        else return x
    }).join("")

    target = str.find((x) => x !== "9")

    const max = str.map((x) => {
        if (target === x) return "9"
        else return x
    }).join("")

    return Number(max) - Number(min)
};