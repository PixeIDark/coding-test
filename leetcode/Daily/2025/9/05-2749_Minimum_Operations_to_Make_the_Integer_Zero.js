// 2^i + num2로 num1을 0으로 만드는 최소 횟수. 불가능하면 -1 반환
// 0 = num1 - k * num2 - (2^a + 2^b + 2^c...)
// (2^a + 2^b + 2^c...) = num1 - k * num2
// 2^1 = 10
// 2^2 = 100
// 2^3 = 1000, |= 1110
// 반복 횟수 k에 따라 2^a + 2^b + 2^c 합이 2진법 1의 개수와 k 가 같음, 최소 반복횟수이기에 중복된 제곱은 고려하지않음
// 즉, 2진법으로 만들고 k횟수와 1의개수가 같은 지점이 정답.
// i의 범위는 0 ~ 60. 중복없으니 최대 횟수는 61번, 최소 횟수는 1번(num1이 0보다 무조건 큼)
// 43분
var makeTheIntegerZero = function (num1, num2) {
    for (let i = 1; i <= 61; i++) {
        const bits = num1 - i * num2
        // 1001110 => 1 4개
        const count = bits.toString(2).split("").filter((x) => x === "1").length

        if (bits < i) return -1
        if (count <= i) return i
    }

    return -1
};