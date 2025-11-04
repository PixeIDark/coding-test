// x 번째까지 큰 빈도의 요소까지 살려두고 전체 합 반환
// 연속적 부분배열의 길이는 K
// Map 객체 num => count
// 29분
var findXSum = function (nums, k, x) {
  const excute = (arr) => {
    let sum = 0;

    const sortedArr = arr.toSorted((a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1];
      return b[0] - a[0];
    });

    for (let i = 0; i < x; i++) {
      sum += sortedArr[i][0] * sortedArr[i][1];
    }

    return sum;
  };

  const arr = Array.from({length: 51}, (_, i) => [i, 0]);

  for (let i = 0; i < k; i++) {
    const num = nums[i];
    arr[num][1]++;
  }

  let result = [excute(arr)];

  for (let i = k; i < nums.length; i++) {
    const addNum = nums[i];
    const removeNum = nums[i - k];

    arr[addNum][1]++;
    arr[removeNum][1]--;
    result.push(excute(arr));
  }

  return result;
};