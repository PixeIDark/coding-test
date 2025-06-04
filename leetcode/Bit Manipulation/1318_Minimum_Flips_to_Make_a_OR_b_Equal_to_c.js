// a | b = c 가 성립하기 위한 a, b 에 최소뒤집기 횟수
// c 에서 0 인부분이 나올려면 a,b 둘다 0 이여야함
// c 에서 1 인부분은 a,b 둘다 1이거나 둘다 1이여도 상관없음
// a,b,c 중 가장 긴 얘를 기준으로 밀어서 비교 i 값이 증가할수록 살살밈
// 밀린a | 밀린b === 밀린c 가 성립되지 않는데, c가 0 일경우, a, b 둘다 0 나와야함
// 즉, count += 2
// c가 1인데 성립안하면 count += 1
// 45분
var minFlips = function (a, b, c) {
    // console.log(5 >> 1) // 2, 101 => 10
    // 최대 길이 - 1 만큼 >> 로 밀어서 비교 그후 최대 길이 - 1 - i 로 미는양 감쇠
    // 0~1 1
    // 2~3 2
    // 3~7 3
    // 8~15 4
    // 16~31 5
    let count = 0

    for (let i = 0; i < 32; i++) {
        const leftA = (a >> i) & 1
        const leftB = (b >> i) & 1
        const leftC = (c >> i) & 1

        if ((leftA | leftB) === leftC) continue

        if (leftC === 1) count++
        else count += leftA + leftB
    }

    return count
};