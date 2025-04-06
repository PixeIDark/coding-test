// nums 부분배열의 모든 요소 쌍이 서로 나눴을 때 둘중 하나는 나머지가 0 이여야함, 부분배열 중 가장 큰거 반환

const nums = [5, 9, 18, 54, 108, 540, 90, 180, 360, 720]
// Output: [9,18,90,180,360,720]
// Explanation: [1,3] is also accepted.

// 둘 중 한 쌍은 약수가 되야함 혹은 배수이거나 내림차순으로 해보자
var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b);

    // dp[i]는 nums[i]를 마지막 원소로 하는 가장 큰 부분집합의 크기
    const dp = new Array(nums.length).fill(1);

    // prev[i]는 nums[i]를 마지막 원소로 하는 가장 큰 부분집합에서 nums[i] 이전의 원소 인덱스
    const prev = new Array(nums.length).fill(-1);

    // 가장 큰 부분집합의 크기와 그 부분집합의 마지막 원소의 인덱스
    let maxSize = 1;
    let maxIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // nums[i]가 nums[j]로 나누어 떨어지고,
            // nums[j]를 마지막 원소로 하는 부분집합에 nums[i]를 추가했을 때 더 큰 부분집합이 된다면
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }

        // 최대 크기 부분집합 갱신
        if (dp[i] > maxSize) {
            maxSize = dp[i];
            maxIndex = i;
        }
    }

    const result = [];
    while (maxIndex !== -1) {
        result.unshift(nums[maxIndex]);
        maxIndex = prev[maxIndex];
    }

    return result;
};

console.log(largestDivisibleSubset(nums))