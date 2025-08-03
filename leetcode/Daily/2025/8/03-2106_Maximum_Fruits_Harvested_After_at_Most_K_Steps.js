// fruits: [0]좌표 [1]이득, startPos: 시작위치, k: 이동가능한 총거리
// fruits은 좌표가 0에 가까운 순서로 정렬되어있음
// 방향 전환은 최대 한번이 효용한계
// 왼쪽, 오른쪽, 왼쪽 후 오른쪽, 오른쪽 후 왼쪽 4가지의 경우에서 최대 이득을 계산
// 전환 시, 첫 방향에서의 k 소모값은 * 2 보정
// 어느 좌표에서 전환시 최대이득일지는 끝까지 해보기 전까지 모름 greedy x
// 이진 탐색. 즉, k를 전부 소모해서 x개 까지의 이득이 가능여부 판단하는 함수 필요
// 왼쪽 오른쪽 전환 여부는 dfs
// 1. dfs기반으로 슬라이딩하는 함수만들기
// 2. 판별 함수 만들기. 내부에서 dfs 함수를 호출함
// 59분
var maxTotalFruits = function (fruits, startPos, k) {
    // fruits 를 정리. 인덱스는 위치 요소는 이득인 배열로
    // 인덱스는 0 ~ 2 * 10^5, 요소는 1 ~ 10^4
    const getIncome = (left, right) => {
        let income = 0;

        for (const [pos, val] of fruits) {
            if (pos >= left && pos <= right) income += val;
        }
        return income;
    };

    let maxIncome = 0;

    for (let l = 0; l <= k; l++) {
        const stamina = k - l * 2;

        if (stamina < 0) break;

        const left = startPos - l;
        const right = startPos + stamina;

        maxIncome = Math.max(maxIncome, getIncome(left, right));
    }


    for (let r = 0; r <= k; r++) {
        const stamina = k - r * 2;

        if (stamina < 0) break;

        const left = startPos - stamina;
        const right = startPos + r;

        maxIncome = Math.max(maxIncome, getIncome(left, right));
    }


    return maxIncome;
};