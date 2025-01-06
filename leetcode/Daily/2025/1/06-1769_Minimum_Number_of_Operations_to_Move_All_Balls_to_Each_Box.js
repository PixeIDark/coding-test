// 박스에 잘 옮겨봐라

const boxes = "001011";
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
//     1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.

// 거리가 멀면 +1 해서 2 해줘
// 왼쪽의 1이 3개고 오른쪽의 1이 4개 일때, 오른쪽 전진 시 -1의 효과를 본다
// 포문 돌다가 해당 인덱스가 1이면 left++ right-- 인덱스의 거리는 전 거리를 이용해서 측정
// 첫 인덱스의 거리는 요소가 1인 인덱스 값을 더하면 된다.
var minOperations = function (boxes) {
  // 길이 1일 때 처리
  if (boxes.length === 1) return [0];

  // right 값과 첫 인덱스 구하기
  let right = 0;
  let prev = 0;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] === "1") {
      right++;
      prev += i;
    }
  }

  const result = [prev];
  let left = 0;

  if (boxes[0] === "1") {
    left++;
    right--;
  }

  for (let i = 1; i < boxes.length; i++) {
    const diff = right - left;
    const curr = prev - diff;
    prev = curr;
    result.push(curr);
    if (boxes[i] === "1") {
      left++;
      right--;
    }
  }

  return result;
};

console.log(minOperations(boxes));
