// 배열 nums의 트리오닉 부분 배열의 합 중 최대 값 반환
// 오름차 내림차를 dp에저장해야함
// dp가 총 세개 필요하고, 단계마다 현재 dp와 이전 dp를 갱신해야함
// 13분
var maxSumTrionic = function (nums) {
  const n = nums.length;
  const dp1 = Array(n).fill(-Infinity);
  const dp2 = Array(n).fill(-Infinity);
  const dp3 = Array(n).fill(-Infinity);

  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      dp1[i] = nums[i] + nums[i - 1];

      if (dp1[i] !== -Infinity) {
        dp1[i] = Math.max(dp1[i], dp1[i - 1] + nums[i]);
      }
    }

    if (nums[i] < nums[i - 1]) {
      if (dp1[i - 1] !== -Infinity) {
        dp2[i] = dp1[i - 1] + nums[i];
      }

      if (dp2[i - 1] !== -Infinity) {
        dp2[i] = Math.max(dp2[i], dp2[i - 1] + nums[i]);
      }
    }

    if (nums[i] > nums[i - 1]) {
      if (dp2[i - 1] !== -Infinity) {
        dp3[i] = dp2[i - 1] + nums[i];
      }

      if (dp3[i - 1] !== -Infinity) {
        dp3[i] = Math.max(dp3[i], dp3[i - 1] + nums[i]);
      }
    }
  }

  return Math.max(...dp3);
};