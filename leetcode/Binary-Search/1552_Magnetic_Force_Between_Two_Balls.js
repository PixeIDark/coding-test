// 최대 자기력 값 출력

const position = [
    269826447, 974181916, 225871443, 189215924, 664652743, 592895362, 754562271,
    335067223, 996014894, 510353008, 48640772, 228945137,
  ],
  m = 4;
// Output: 3
// Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.

// m = 2 는 최소와 최대 값에 차이이임
// m > 2 는 m - 2 로 최소와 최대 값의 차이를 나눈 값으로 최소부터 더해나가야함. 최소부터 더한 값을 찾아야함.
var maxDistance = function (position, m) {
  position.sort((a, b) => a - b);

  let left = 1;
  let right = position[position.length - 1] - position[0];
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    let count = 1;
    let prev = position[0];

    for (let i = 1; i < position.length; i++) {
      if (position[i] - prev >= mid) {
        count++;
        prev = position[i];
      }
    }

    if (count >= m) {
      result = mid;
      left = mid + 1;
    } else right = mid - 1;
  }

  return result;
};

console.log(maxDistance(position, m));
