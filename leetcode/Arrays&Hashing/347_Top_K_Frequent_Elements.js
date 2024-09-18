const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

// 객체안의 배열로 만들고 길이로 판별해보자
var topKFrequent = function (nums, k) {
  return objOutPut(sortByObj(createObj(nums)), k);
};

const createObj = (arr) => {
  let b = {};

  for (let i = 0; i < arr.length; i++) {
    if (b[arr[i]]) {
      b[arr[i]].push(1);
    } else {
      b[arr[i]] = [1];
    }
  }
  return b;
};

// 이제 k의 값에 따라 우선순위로 나눠서 배열로 출력해야해 길이 판별하는 거 만들자.
const sortByObj = (obj) => {
  let b = [];

  for (let key in obj) {
    b.push([key, obj[key].length]);
  }

  b.sort((a, b) => b[1] - a[1]);

  return b.map((item) => Number(item[0]));
};

// k에따라 컷해서 보여주면 끝!
const objOutPut = (arr, input) => {
  return arr.slice(0, input);
};

console.log(topKFrequent(nums, k));
