const height = [1, 3, 2, 5, 25, 24, 5];
// Output: 24
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// 인덱스의 차이가 밑변 m, 인덱스 값의 최소가 높이h.
// l과 r의 이동 동기는 h 값이 커지는 경우로 가야해 m이 줄어드는 리스크를 감수해야하므로
// 풀었는데 하위 5% ㅋㅋㅋㅋㅋㅋㅋ clg가 있으면 runtime속도가 20배 이상 늘어남.
var maxArea = function (height) {
  let a = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    const m = r - l;
    a = Math.max(a, m * Math.min(height[l], height[r]));
    if (height[l] < height[r]) {
      l++;
    } else r--;
  }

  return a;
};

console.log(maxArea(height));
