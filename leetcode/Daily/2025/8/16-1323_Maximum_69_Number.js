// 앞자리부터 탐색해서 6이 보이면 9로 바꾸고 반환
// 5분
var maximum69Number = function (num) {
    num = String(num).split("")

    for (let i = 0; i < num.length; i++) {
        if (num[i] === "6") {
            num[i] = "9"
            break
        }
    }

    return Number(num.join(""))
};