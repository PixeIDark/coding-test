// 합이 target인거 몇갠지 집합. 요소 중복으로 쓸 수 있음.

const candidates = [2, 3, 6, 7];
const target = 7;
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// 1. 재귀함수 만들고 if문으로 target보다 작은지 가늠.
// 2. target과 같으면 함수 종료
// 담에는 노가다로도 해보자
var combinationSum = function (candidates, target) {
  let result = [];

  const backTracking = (k, temp, count) => {
    if (count === 0) {
      result.push([...temp]);
      return;
    }

    if (count < 0) return;

    for (let i = k; i < candidates.length; i++) {
      temp.push(candidates[i]);
      backTracking(i, temp, count - candidates[i]);
      temp.pop();
    }
  };
  backTracking(0, [], target);

  return result;
};

console.log(combinationSum(candidates, target));
