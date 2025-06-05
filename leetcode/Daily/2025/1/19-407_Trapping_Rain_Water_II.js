// 물 웅덩이 너비 계산

const heightMap = [[3, 3, 3, 3, 3], [3, 2, 2, 2, 3], [3, 2, 1, 2, 3], [3, 2, 2, 2, 3], [3, 3, 3, 3, 3]]
// Output: 4
// Explanation: After the rain, water is trapped between the blocks.
//     We have two small ponds 1 and 3 units trapped.
//     The total volume of water trapped is 4.

// m-1, n-1, 0, 0 인덱스 들은 무시해야함 어차피 물이 세버림. <= 맞음
// 복수
// 내림차 단조스택 우선 열에서 단조스택을 채우고 해당하는 위치의 dp[i][j] 에 값 저장.
// 마지막 값보다 큰 숫자가 나오면 해당 첫번째 값과 마지막 값중 작은 쪽을 기준으로 해서 제거할 스택의 높이를 계산
// stack 의 첫번째 값은 높이를 계산하지 않는다.
// 그 후 행에서 시작하고, 행에서 dp 에 저장할 경우 Math.min 값으로 한다.
// 행에서도 인정받아야 진짜 값임 따로 vis 같은거 만들어서 저장하자
// TODO: 벽
var trapRainWater = function (heightMap) {
    const n = heightMap.length;
    const m = heightMap[0].length;
    const vis = Array.from({length: n}, () => Array(m).fill(0));
    const dp = Array.from({length: n}, () => Array(m).fill(Infinity));


    // 열
    for (let x = 0; x < m; x++) {
        const stack = []
        for (let y = 0; y < n; y++) {
            while (stack.length && heightMap[stack[stack.length - 1][0]][stack[stack.length - 1][1]] < heightMap[y][x]) {
                const maxHeight = Math.min(heightMap[stack[0][0]][stack[0][1]], heightMap[y][x]);
                const min = stack.pop()
                const minHeight = heightMap[min[0]][min[1]];

                if (stack.length === 0) break
                dp[min[0]][min[1]] = maxHeight - minHeight
                vis[min[0]][min[1]]++
            }

            stack.push([y, x]);
        }
    }

    // 행
    for (let y = 0; y < n; y++) {
        const stack = []
        for (let x = 0; x < m; x++) {
            while (stack.length && heightMap[stack[stack.length - 1][0]][stack[stack.length - 1][1]] < heightMap[y][x]) {
                const maxHeight = Math.min(heightMap[stack[0][0]][stack[0][1]], heightMap[y][x]);
                const min = stack.pop()
                const minHeight = heightMap[min[0]][min[1]];

                if (stack.length === 0) break
                dp[min[0]][min[1]] = Math.min(dp[min[0]][min[1]], maxHeight - minHeight)
                vis[min[0]][min[1]]++
            }

            stack.push([y, x]);
        }
    }

    let result = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (vis[i][j] === 2) result += dp[i][j]
        }
    }
    console.log(heightMap)
    console.log(dp)
    return result
};

console.log(trapRainWater(heightMap));