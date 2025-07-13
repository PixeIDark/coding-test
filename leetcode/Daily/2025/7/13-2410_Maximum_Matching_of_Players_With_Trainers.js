// 배열들 내림차순으로 정렬
// 각비교후 조건 충족시 카운트하고, 왼쪽 오른쪽 ++
// 아니면 왼쪽만 ++
// 9분
var matchPlayersAndTrainers = function (players, trainers) {
    players.sort((a, b) => b - a)
    trainers.sort((a, b) => b - a)

    let count = 0

    for (let l = 0, r = 0; l < players.length && r < trainers.length; l++, r++) {

        if (players[l] <= trainers[r]) count++
        else r--
    }

    return count
};