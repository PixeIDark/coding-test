// 삼중항! 항 두개 합쳐서 각요소가 큰것들로 대체됨

const triplets = [
    [2, 5, 3],
    [1, 8, 4],
    [1, 7, 6],
  ],
  target = [2, 7, 5];
// Output: true
// Explanation: Perform the following operations:
// - Choose the first and last triplets [[2,5,3],[1,8,4],[1,7,5]]. Update the last triplet to be [max(2,1), max(5,7), max(3,5)] = [2,7,5]. triplets = [[2,5,3],[1,8,4],[2,7,5]]
// The target triplet [2,7,5] is now an element of triplets.

// 요소 가진 놈들만 일단 모아봐
// map에 많이겹치느놈 담고 우선순위 해보는것도
// 일단 다 합쳐보는데, 요소보다 큰 숫자가 있으면 합치면 안돼
// 합치는조건: target의 요소중 하나라도 포함,
// 우선적으로 요소 포함된거랑 합치고, 자기 자신이 가진 요소가 변형될 거 같으면 작은 친구 모임이랑 합침.
var mergeTriplets = function (triplets, target) {
  let result = [0, 0, 0]; // 사용 가능한 triplet들의 최대값을 저장할 배열

  for (let triplet of triplets) {
    if (
      triplet[0] <= target[0] &&
      triplet[1] <= target[1] &&
      triplet[2] <= target[2]
    ) {
      let same = 0;
      for (let i = 0; i < result.length; i++) {
        result[i] = Math.max(triplet[i], result[i]);
        if (result[i] === target[i]) {
          same++;
        }

        if (same === 3) return true;
      }
    }
  }

  return false;
};

console.log(mergeTriplets(triplets, target));
