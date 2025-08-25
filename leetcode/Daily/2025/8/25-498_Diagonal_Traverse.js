// [0,0] => [0,1], [1,0] => [2,0], [1,1], [0,2] => [1,2], [2,1] => [2,2]
// 대각선 시작하면 x,y 반전에 가까워짐 [5,0], [4,1], [3,2], [2,3], [1,4], [0,5]
// length 3: x y y x
// length 4: x y x x y x
// length 5: x y x y y x y x
// length 2: x x
// x 증가 y 증가 교차패턴. 패턴길이는 a = length * 2 - 2. a / 2 ~ a / 2 + 1 은 연속 패턴
// 30분
var findDiagonalOrder = function (mat) {
    const n = mat.length;
    const m = mat[0].length;
    const diagonals = n + m - 1;
    const result = [];

    for (let i = 0; i < diagonals; i++) {
        const diagonal = [];
        let y = i < m ? 0 : i - m + 1
        let x = i < m ? i : m - 1

        while (y < n && x >= 0) {
            diagonal.push(mat[y][x]);
            y++;
            x--;
        }
        // 리버스 대신 while 분기 나누면 더 빠르게 가능
        if (i % 2 === 0) diagonal.reverse();

        result.push(...diagonal);
    }

    return result;
};