// first, second 가 경쟁하게 되는 가장 빠른 라운드와 가장 늦은 라운드 반환
// 각 라운드마다 n 만큼의 분기를 만듬
// 61분
var earliestAndLatest = function (n, firstPlayer, secondPlayer) {
    let earliest = Infinity;
    let latest = 0;

    const dfs = (players, round) => {
        const len = players.length;

        if (len === 2) {
            earliest = Math.min(earliest, round);
            latest = Math.max(latest, round);
            return;
        }

        const firstIdx = players.indexOf(firstPlayer);
        const secondIdx = players.indexOf(secondPlayer);

        for (let i = 0; i < Math.floor(len / 2); i++) {
            if ((i === firstIdx && len - 1 - i === secondIdx) ||
                (i === secondIdx && len - 1 - i === firstIdx)) {
                earliest = Math.min(earliest, round);
                latest = Math.max(latest, round);
                return;
            }
        }

        const simulateRound = (matchIndex, winners) => {
            if (matchIndex >= Math.floor(len / 2)) {
                if (len % 2 === 1) {
                    winners.push(players[Math.floor(len / 2)]);
                }
                winners.sort((a, b) => a - b);
                dfs(winners, round + 1);
                return;
            }

            const leftIdx = matchIndex;
            const rightIdx = len - 1 - matchIndex;
            const leftPlayer = players[leftIdx];
            const rightPlayer = players[rightIdx];

            if (leftPlayer === firstPlayer || leftPlayer === secondPlayer) {
                simulateRound(matchIndex + 1, [...winners, leftPlayer]);
            } else if (rightPlayer === firstPlayer || rightPlayer === secondPlayer) {
                simulateRound(matchIndex + 1, [...winners, rightPlayer]);
            } else {
                simulateRound(matchIndex + 1, [...winners, leftPlayer]);
                simulateRound(matchIndex + 1, [...winners, rightPlayer]);
            }
        };

        simulateRound(0, []);
    };

    const initialPlayers = Array.from({length: n}, (_, i) => i + 1);
    dfs(initialPlayers, 1);

    return [earliest, latest];
};