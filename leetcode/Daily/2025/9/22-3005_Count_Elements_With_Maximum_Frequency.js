// 최대 빈도를 갖는 요소의 개수, 빈도수가 같은게 복수면 모두 합
// 배열에 넣고 1 ~ 100, 정렬 후 [0]부터 합친다. 만약 [0]보다 요소가 작으면 바로 브레이크
// 4분
var maxFrequencyElements = function (nums) {
    const freq = Array(100).fill(0)

    for (const num of nums) {
        freq[num - 1]++
    }

    freq.sort((a, b) => b - a)
    const max = freq[0]
    let total = 0

    // 토탈 초기값에 맥스를 할당하고, 인덱스 1부터 반복하면 미세한 최적화. 보기엔 오브문이 더 좋음
    for (const count of freq) {
        if (count < max) break
        total += count
    }

    return total
};