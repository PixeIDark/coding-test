// 오름차순 정렬이 만들어 질수 있게 최소한의 배열 길이 삭제.

const arr = [1, 2, 3];
// Output: 3
// Explanation: The shortest subarray we can remove is [10,4,2] of length 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.
//     Another correct solution is to remove the subarray [3,10,4].

// 순서 어긋나는 놈 만나면 그 전 순서부터 검거. i-2까지 기억해야함.
// 걍 배열에 push 하고 마지막 놈이랑 비교 하는식으로 ㄱㄱ.
var findLengthOfShortestSubarray = function (arr) {
  let left = 0;
  while (left + 1 < arr.length && arr[left] <= arr[left + 1]) {
    left++;
  }

  let right = arr.length - 1;
  while (right > 0 && arr[right] >= arr[right - 1]) {
    right--;
  }
  let result = Math.min(arr.length - left - 1, right);

  let i = 0;
  let j = right;
  while (i <= left && j < arr.length) {
    if (arr[i] <= arr[j]) {
      result = Math.min(result, j - i - 1);
      i++;
    } else j++;
  }

  return result < 0 ? 0 : result;
};

console.log(findLengthOfShortestSubarray(arr));
