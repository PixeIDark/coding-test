// 와일드카드를 각 수업에 배치해서 최대의 평균 합격률 구하기
// 최대 학생 수가 적은곳에 배치해야 최대 효용
// 0/2 => 0%, 1/3 => 33%, 2/3 => 66%
// 합격한 학생수는 고려하지않고 최대 학생수만 고려하면됨
// 와카 배치할 때마다 우선순위큐로 정렬시켜서 가장 낮은곳에 투자 반복
// 35분
var maxAverageRatio = function (classes, extraStudents) {
    // 수강생과 합격자 수가 같으면 배제
    const n = classes.length
    const queue = []
    let k = 0

    for (const [pass, total] of classes) {
        if (pass === total) k++
        else queue.push([pass, total])
    }

    while (extraStudents > 0) {
        queue.sort((a, b) => {
            const gainA = (a[0] + 1) / (a[1] + 1) - a[0] / a[1]
            const gainB = (b[0] + 1) / (b[1] + 1) - b[0] / b[1]
            return gainB - gainA
        })

        const [pass, total] = queue[0]
        queue[0] = [pass + 1, total + 1]
        extraStudents--
    }


    const total = queue.reduce((a, b) => a + b[0] / b[1], 0)

    return (total + k) / n
};