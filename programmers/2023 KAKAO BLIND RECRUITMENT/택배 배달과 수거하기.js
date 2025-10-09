// 가장 deliveries 가 먼곳 i 먼저 배달하고, pickups 도 가장 먼곳까지 향해서 수거한다음 오는게 합리적
// 56분
function solution(cap, n, deliveries, pickups) {
    let time = 0
    let boxD = 0
    let boxP = 0

    for (let i = n - 1; i >= 0; i--) {
        // 수거든 배달이든 순서 상관없음 먼저 오는거 하면됨
        boxD += deliveries[i]
        boxP += pickups[i]

        while (boxD > 0 || boxP > 0) {
            boxD -= cap
            boxP -= cap

            time += i * 2 + 2
        }
    }

    return time
}