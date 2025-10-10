// 프린트 명령어 셀 값 배열 출력
// 머지와 언머지가 중요함 어떤식으로할지??
// 참조표를 애초에 두가지 만들어야함
// 1. 해당 위치를 참조하는 얘
// 2. 해당 위치가 참조하는 얘
// ex) MERGE r1 c1 r2 c2 => 참조표1[1][2] = r2 c2, 참조표2[1][2] = r1 c1
// 언머지시 참조표1, 참조표2 를 참고해서 모든 관계를 해제하고, 최상위에있는 할당 값을 대입해주면됨
// 프린트시 참조표2를 기반으로 최상위 값을 추적한 뒤, 걔를 출력하면됨 업데이트시에는 변경
// TODO: 벽, 반푼이
function solution(commands) {
    const n = 51;
    const parent = Array.from({length: n}, () => Array.from({length: n}, () => [-1, -1]));
    const children = Array.from({length: n}, () => Array.from({length: n}, () => [])); // 여러 자식 가능
    const grid = Array.from({length: n}, () => Array(n).fill(""));
    const result = [];

    const prompt = {
        UPDATE: (...args) => {
            if (args.length === 2) {
                // UPDATE value1 value2
                const [value1, value2] = args;
                for (let y = 1; y <= 50; y++) {
                    for (let x = 1; x <= 50; x++) {
                        if (grid[y][x] === value1) grid[y][x] = value2;
                    }
                }
            } else {
                // UPDATE r c value
                let [r, c, val] = args;
                // parent 순회해서 최상위 찾기
                while (parent[r][c][0] !== -1) {
                    [r, c] = parent[r][c];
                }
                grid[r][c] = val;
            }
        },

        MERGE: (r1, c1, r2, c2) => {
            if (r1 === r2 && c1 === c2) return;

            let [root1r, root1c] = [r1, c1];

            while (parent[root1r][root1c][0] !== -1) {
                [root1r, root1c] = parent[root1r][root1c];
            }

            let [root2r, root2c] = [r2, c2];

            while (parent[root2r][root2c][0] !== -1) {
                [root2r, root2c] = parent[root2r][root2c];
            }

            if (root1r === root2r && root1c === root2c) return;

            const val1 = grid[root1r][root1c];
            const val2 = grid[root2r][root2c];
            const mergedValue = val1 || val2;

            parent[root2r][root2c] = [root1r, root1c];
            children[root1r][root1c].push([root2r, root2c]);

            grid[root1r][root1c] = mergedValue;
            grid[root2r][root2c] = "";
        },

        UNMERGE: (r, c) => {
            let [rootr, rootc] = [r, c];

            while (parent[rootr][rootc][0] !== -1) {
                [rootr, rootc] = parent[rootr][rootc];
            }

            const val = grid[rootr][rootc];
            const stack = [[rootr, rootc]];
            const merged = [];

            while (stack.length > 0) {
                const [cr, cc] = stack.pop();
                merged.push([cr, cc]);

                for (const [chr, chc] of children[cr][cc]) {
                    stack.push([chr, chc]);
                }
            }

            for (const [mr, mc] of merged) {
                parent[mr][mc] = [-1, -1];
                children[mr][mc] = [];
                grid[mr][mc] = "";
            }

            grid[r][c] = val;
        },

        PRINT: (r, c) => {
            let [cr, cc] = [r, c];

            while (parent[cr][cc][0] !== -1) {
                [cr, cc] = parent[cr][cc];
            }
            result.push(grid[cr][cc] || "EMPTY");
        }
    };

    for (const command of commands) {
        const parts = command.split(" ");
        const action = parts.shift();
        const args = action === "UPDATE" && parts.length === 2
            ? parts
            : parts.map(v => isNaN(v) ? v : parseInt(v));

        prompt[action](...args);
    }

    return result;
}