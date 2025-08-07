// 왼쪽 아래 아이는 x 는 항상 증가, 오른쪽 위 아이는 y는 항상 증가
// 왼쪽 위 아이는 x or y 둘 중하나 또는 둘 다 증가해야함
// 걍 모르겠음 n 만큼 이동해서 도착한다고 가정한다
// 첫번째는 대각선으로만 움직여야함 값 고정
// 1. 첫번째 얘가 지나갈 자리는 모두 0으로 값을 바꾸고 결과에 합산
// 2. 두번째 세번째는 dp
// TODO: 벽, 2d - dp 구상이 안됨
var maxCollectedFruits = function (fruits) {
    const n = fruits.length;
    let result = fruits[n - 1][0] + fruits[0][n - 1];

    for (let i = 0; i < n; i++) {
        result += fruits[i][i];
        fruits[i][i] = 0;
    }

    for (let x = 1; x < n - 1; x++) {
        let large = Math.max(fruits[n - 1][x], fruits[n - 2][x])
        result += large
    }

    for (let y = 1; y < n - 1; y++) {
        let large = Math.max(fruits[y][n - 1], fruits[y][n - 2])
        result += large
    }

    return result
};