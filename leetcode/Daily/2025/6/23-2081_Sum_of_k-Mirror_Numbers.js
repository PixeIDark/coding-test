// 10진법과 k진법으로 거꾸로 읽어도 같은 숫자를 미러라함
// n 이 주어지면 미러인 숫자 오름차순으로 n개의 합
// 문자열 들어오면 앞 뒤 같은지 계산
// TODO: 벽
var kMirror = function (k, n) {
    const canMirror = (str) => {
        for (let left = 0, right = str.length - 1; left < right; left++, right--) {
            if (str[left] !== str[right]) return false
        }

        return true
    }

    const arr = []
    let i = 0

    while (arr.length < n) {
        i++
        const numToStr = String(i)
        const bitToStr = i.toString(k)
        if (canMirror(numToStr) && canMirror(bitToStr)) arr.push(i)
    }

    return arr.reduce((a, b) => a + b, 0)
};