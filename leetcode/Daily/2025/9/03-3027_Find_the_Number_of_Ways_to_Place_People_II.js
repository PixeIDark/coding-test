// [1]내림차 정렬, [0]오름차순으로 정렬
// 10분, 어제랑 같은 문제 정렬 기준만 다름
var numberOfPairs = function (points) {
    points.sort((a, b) => b[1] - a[1] || a[0] - b[0])
    const n = points.length
    let count = 0

    for (let i = 0; i < n - 1; i++) {
        const [xA, _] = points[i]
        let maxX = Infinity

        for (let j = i + 1; j < n; j++) {
            const [xB, _] = points[j]

            if (xA > xB || xB >= maxX) continue
            maxX = xB
            count++

            if (xA === maxX) break
        }
    }

    return count
};