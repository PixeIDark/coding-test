// 벽. 설명조차 이해못함
var snakesAndLadders = function (board) {
    const n = board.length;
    const target = n * n;

    function getPosition(num) {
        num--;
        const row = n - 1 - Math.floor(num / n);
        const col = Math.floor(num / n) % 2 === 0
            ? num % n
            : n - 1 - (num % n);
        return [row, col];
    }

    const queue = [[1, 0]];
    const visited = new Set([1]);

    while (queue.length > 0) {
        const [curr, moves] = queue.shift();

        if (curr === target) {
            return moves;
        }

        for (let dice = 1; dice <= 6; dice++) {
            let next = curr + dice;

            if (next > target) break;

            const [row, col] = getPosition(next);

            if (board[row][col] !== -1) {
                next = board[row][col];
            }

            if (visited.has(next)) continue;

            visited.add(next);
            queue.push([next, moves + 1]);
        }
    }

    return -1;
};