// 독릴 정렬 최대 수

const arr = [1, 2, 0, 3];
// Output: 4
// Explanation:
//     We can split into two chunks, such as [1, 0], [2, 3, 4].
//     However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.

// 첫 청크의 최대값보다 작아야함 두번째 청크의 최소 값이
// 그게 아닐경우 청크의 크기를 늘린다 만들지 말고
var maxChunksToSorted = function (arr) {
  let chunks = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    // 현재까지의 최댓값 갱신
    max = Math.max(max, arr[i]);

    // 최댓값이 현재 인덱스와 같다면 청크 하나 완성
    if (max === i) {
      chunks++;
    }
  }

  return chunks;
};

console.log(maxChunksToSorted(arr));
