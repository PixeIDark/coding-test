// 값과 등장 빈도가 일치하는 정수중 가장 큰 정수 찾기. 없으면 -1
// 인덱스 = 정수, 요소 = 빈도 배열 생성
// 반복문에서 배열을 조회해서 빈도수와 최대정수 추적.
// 6분
var findLucky = function (arr) {
    const freqs = Array(501).fill(0)

    for (const num of arr) {
        freqs[num]++
    }

    const lucky = freqs.filter((n, i) => n === i)
    const result = Math.max(...lucky) || -1

    return result
};