// 물 가둬서 양 구하기
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// r과 l의 min 값이 r, l 사이의 값보다 높을 경우에 물이 고일수가 있음.
// 물이 고일수 있을 경우, 고이는 양은 r, l 사이의 max 값 * r, l 거리임.
// 높이 1에 몇개 고이는지부터 해보자. 그담 높이 2
var trap = function (height) {
  // 풀이봐도 벽느낌.
};
