// 왼쪽 상단 또는 오른쪽 하단으로 쌍끼리 이어서 사각형 만들기
// 사각형안에 다른 좌표는 없어야함 개수출력
// [1, 3] + [3, 1] => y가 1이상 3이하 그리고 x가 1이상 3이하인 경우 내부에 포함됨
// [1]오름차 순으로 정렬 같으면 [0] 큰쪽 우선
// 조건1: B가 A보다 x 값이 더 크면 안됨
// 조건2: x값은 A의 x 보다 작다는 전제하에 증가만 허용됨
// A의 x와 B의 x가 같은 경우는 한 번만 허용됨
// 44분
var numberOfPairs = function (points) {
    points.sort((a, b) => a[1] - b[1] || b[0] - a[0])
    const n = points.length
    let count = 0

    for (let i = 0; i < n - 1; i++) {
        const [xA, _] = points[i]
        let minX = -1

        for (let j = i + 1; j < n; j++) {
            const [xB, _] = points[j]

            if (xA < xB || xB <= minX) continue
            minX = xB
            count++

            if (xA === minX) break
        }
    }

    return count
};