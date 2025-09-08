// [0] + [1] = n 이되게 배열 반환, 배열의 요소가 0이 아닌 양의정수여야함
// 중복가능
// n === 11, [1, 10]은 안되고 [2, 9]는 됨
// n === 1010, [1, 1009]x [11, 999]o
// 요소 자리수가 0을 포함하면 안됨
// [0]을 선별하면서 n - [0] 후, 결과인 [1]이 조건을 충족하면 그대로 리턴 아니면 계속 반복
// 35분
var getNoZeroIntegers = function (n) {
    for (let i = 1; i < n; i++) {
        const str1 = String(i)
        const str2 = String(n - i)

        if (str1.includes("0") || str2.includes("0")) continue
        else return [Number(str1), Number(str2)]
    }
};