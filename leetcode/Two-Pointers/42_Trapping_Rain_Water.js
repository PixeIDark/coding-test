// 물 가둬서 양 구하기
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// 높이 1부터 순회하자 물 고일수있는 사각형 세고 개수추가
// 1. 재귀 함수로 height값 계속 높아지게 하면됨.
// 2. 초반에 최대 조사할 높이값을 미리 뽑아둘 것.
// 3. <i i보다 작은 놈들만 값 추가야!
// 4. i 값이상인 인덱스를 포착해야함. 우선.
// 시간 제한 초과 ㅈㅈ
// 반복문 하나만 줄여보자 어케든
var trap = function (height) {
  let result = 0;
  let l = 0;
  let lMax = 0;
  let r = height.length - 1;
  let rMax = 0;

  while (l < r) {
    if (height[l] < height[r]) {
      if (height[l] >= lMax) {
        lMax = height[l];
      } else {
        result += lMax - height[l];
      }
      l++;
    } else {
      if (height[r] >= rMax) {
        rMax = height[r];
      } else {
        result += rMax - height[r];
      }
      r--;
    }
  }

  return result;
};
// l, r 초기화 안해도되네 ㅋㅋ
// var trap = function (height) {
//   let result = 0;
//   let h = 1;
//   let l = 0;
//   let r = height.length - 1;
//   let arr = [];

//   const dfs = (h, l, r) => {
//     if (h > Math.max(...height)) return;
//     if (height[l] < h) dfs(h, l + 1, r);
//     if (height[r] < h) dfs(h, l, r - 1);
//     arr = height.slice(l, r + 1);
//     for (const a of arr) {
//       if (a < h) result++;
//     }

//     dfs(h + 1, l, r);
//   };
//   dfs(h, l, r);
//   return result;
// };

console.log(trap(height));
