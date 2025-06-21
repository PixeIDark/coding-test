// 문자빈도가 최소와 최대가 k 이하이도록 만들기위해 삭제해야할 최소 char 개수 출력
// 빈도수가 가장 큰 얘들부터 최소치와 비교해서 조건에 맞게 삭제하면됨
// 즉 기준넘는 얘들 - 최소치 - k
// 최소치인 얘들을 삭제해서 최소치를 올릴 수도있음
// 최소치 삭제할지 최대치 삭제할지 판단을 어떻게..?
// 매 순간 최소치와 최대치를 비교해서 누구 삭제하는게 좋은지 비교해서 결정
// 55분
var minimumDeletions = function (word, k) {
    let freq = new Int32Array(26)
    // 인트 16 쓰지말자 범위가 너무 작음

    for (const char of word) {
        const index = char.charCodeAt(0) - 97
        freq[index]++
    }

    freq = freq.filter((x) => x !== 0).sort((a, b) => a - b)
    let result = Infinity

    for (let i = 0; i < freq.length; i++) {
        const minFreq = freq[i]
        let count = 0

        // 최소치보다 작은 얘들 삭제
        for (let j = 0; j < i; j++) {
            count += freq[j]
        }

        // 최소치보다 큰 얘들 조정
        for (let j = i; j < freq.length; j++) {
            if (freq[j] - minFreq > k) count += freq[j] - minFreq - k
        }

        result = Math.min(result, count)
    }
    // TODO: 중첩 포문이지만 알파벳 개수라서 상수임 <= 인지했으면 해결속도 훨씬 빨랏을꺼임
    return result
};