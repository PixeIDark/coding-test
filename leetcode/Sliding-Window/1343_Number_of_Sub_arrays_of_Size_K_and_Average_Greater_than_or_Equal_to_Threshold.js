// 길이가 k 인 연속된 하위 배열중 평균값이 threshold 보다 크거나 같은 하위 배열의 개수 출력

const arr = [2, 2, 2, 2, 5, 5, 5, 8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

// 슬라이딩 윈도우
// - 모든 요소의 합이 k * threshold 이상이면 됨
// 1. 길이 k 인 초기 윈도우를 만든다.
// 2. 누적합을 토대로 threshold 검증
// 3. 슬라이딩 해서 계속 검증
// 8분
var numOfSubarrays = function (arr, k, threshold) {
    const n = arr.length
    const target = k * threshold
    let result = 0
    let sum = 0

    for (let i = 0; i < k; i++) sum += arr[i]

    if (sum >= target) result++

    for (let i = k; i < n; i++) {
        sum += arr[i] - arr[i - k]
        if (sum >= target) result++
    }

    return result
};

console.log(numOfSubarrays(arr, k, threshold))