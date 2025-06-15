// 정수 바꿔서 얻은 최대값 a, 최소값 b
// a - b 를 구하여라
// 어제 문제랑 다른게 뭐냐? 맨 앞자리는 0이 올수가 없다는거임. 즉, 최소값 구할때 연산이 다름
// 123456 => 923456 - 103456 = 820000
// 21분
var maxDiff = function (num) {
    const str = String(num)
    const arr = str.split("")

    // 9 가 아닌 첫번째 를 찾아야함
    const maxTarget = arr.find((x) => x !== "9")
    const max = str.replaceAll(maxTarget, 9)
    // 첫번째 요소가 2 이상일 경우 1로 바꾸는게 최대값에 가장 가까움
    // 첫번째 요소가 1일 경우 그다음 번째요소 중 0 이아닌 것들 중 가장 서열 높은 얘를 0으로 바꾸는것
    let min = str.replaceAll(str[0], 1)

    if (str[0] === "1") {
        const minTarget = arr.slice(1).find((x) => x !== "0" && x !== "1")
        min = str.replaceAll(minTarget, 0)
    }

    return Number(max) - Number(min)
};