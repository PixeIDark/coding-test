// x, y 둘 중 누가 더 z에 먼저 도달하는지
// x 먼저 도착 시 1, y 먼저 도착 시 2, 동시 0 반환
// z 와 x, y 차를 절대 값으로 치환 후 서로 비교해서 값 반환
// 4분
var findClosest = function (x, y, z) {
    const person1 = Math.abs(z - x)
    const person2 = Math.abs(z - y)

    if (person1 < person2) return 1
    else if (person1 > person2) return 2
    else return 0
};