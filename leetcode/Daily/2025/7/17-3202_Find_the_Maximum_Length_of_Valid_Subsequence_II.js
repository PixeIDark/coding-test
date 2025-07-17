// 나머지를 인덱스로하는 dp 생성 후 저장
// 나머지가 같다고 이어지는 것은 아님 nums 길이만큼 가능성이 존재함
// 각요소끼리 부딫쳐서 나머지 계산
// 1부터
// 29분
var maximumLength = function (nums, k) {
    const dp = Array.from({length: nums.length}, () => Array(k).fill(0))
    let max = 0

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const 나머지 = (nums[i] + nums[j]) % k
            dp[i][나머지] = dp[j][나머지] + 1

            max = Math.max(max, dp[i][나머지])
        }
    }

    return max + 1
};