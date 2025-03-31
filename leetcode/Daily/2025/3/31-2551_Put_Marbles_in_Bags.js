// weights k 개의 배열로 나누고 각 배열의 0 + length-1 인덱스 요소 합들 중 최소 값 그후 최대 값 의 차

const weights = [1, 3, 5, 3], k = 2
// Output: 4
// Explanation:
//     The distribution [1],[3,5,1] results in the minimal score of (1+1) + (3+1) = 6.
// The distribution [1,3],[5,1], results in the maximal score of (1+3) + (5+1) = 10.
// Thus, we return their difference 10 - 6 = 4.

// 최소 값 을 두 번 구할수 있다쳐 그럼
// 오름차 순으로 정렬,
// 가장큰 요소는 가장 작은 값이 처음에 있게 하는게 베스트 혹은 중간에 있게해야함 처음과 끝이 되게해선 안됨
// 가장 작은 요소는 혼자 겪리하는게 베스트
var putMarbles = function (weights, k) {
    if (k === 1) return 0;

    const costs = [];
    for (let i = 0; i < weights.length - 1; i++) {
        costs.push(weights[i] + weights[i + 1]);
    }
    costs.sort((a, b) => a - b);

    let minCost = 0;
    for (let i = 0; i < k - 1; i++) {
        minCost += costs[i];
    }

    let maxCost = 0;
    for (let i = costs.length - 1; i > costs.length - k; i--) {
        maxCost += costs[i];
    }
    console.log(minCost, maxCost)
    return maxCost - minCost;
}

console.log(putMarbles(weights, k));