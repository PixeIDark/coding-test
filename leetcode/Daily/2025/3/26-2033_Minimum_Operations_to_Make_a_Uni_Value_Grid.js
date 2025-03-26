// 모든 숫자를 같게만들어라 최소 작업 횟수 반환 불가능하면 -1

const grid = [[529, 529, 989], [989, 529, 345], [989, 805, 69]], x = 92
// Output: 4
// Explanation: We can make every element equal to 4 by doing the following:
//     - Add x to 2 once.
// - Subtract x from 6 once.
// - Subtract x from 8 twice.
//     A total of 4 operations were used.

// 일단 성공 여부부터 따져야해. Math.abs(선택 값 - 기준 값) % x === 0 이 모든 값에 성립해야함
// 기준 값을 선택해야하는데 기준 값은 Math.abs(선택 값 - 기준 값) / x === y 를 모든 요소에 수행하고 y의 모든합이 가장 적어야함
// 필요한 값은 y 값 기준 값이 어찌되든 y를 구해서 합한 값을 반환해야해
// 기준 값은 아마도 모든 요소의 합 / 요소의 개수 에서 가장 가까운 정수들을 대입해보면 될꺼임
// 1. 가능 여부를 먼저 검증. x로 나눴을 때 모든 요소가 나머지가 0이 나와야함
// 2. 기준 값을 구하고 Math.abs(선택 값 - 기준 값) % x === 0 검증 실패 시 다음으로 가까운 기준 값을 찾아서 다시 대입함.
var minOperations = function (grid, x) {
    const n = grid.length
    const m = grid[0].length
    // 선택 값 % x 가 모두 같아야 성립해
    const flat = [];

    // 모든 값들을 하나의 배열로 모으기
    const remainder = grid[0][0] % x
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] % x !== remainder) return -1
            flat.push(grid[i][j]);
        }
    }

    // 이거 중간 값에서 나머지 더해주고 계산해
    flat.sort((a, b) => a - b)
    const target = flat[Math.floor(flat.length / 2)]
    let result = 0
    for (const num of flat) {
        result += Math.abs(num - target) / x
    }

    return result
};

console.log(minOperations(grid, x));