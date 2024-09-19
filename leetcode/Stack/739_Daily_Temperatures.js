// 다음 숫자큰놈 이랑 index차이 얼마나 나는지.
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// Output: [1,1,4,2,1,1,0,0]

// for문 두 개 갈기면 쉬울 거 같긴함.
// 시간 초과.
// stack 만들어서 인덱스 저장하고 현재 값과 비교
var dailyTemperatures = function (temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let a = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (a.length > 0 && temperatures[i] > temperatures[a[a.length - 1]]) {
      let b = a.pop();
      result[b] = i - b;
    }
    a.push(i);
  }

  return result;
};

console.log(dailyTemperatures(temperatures));
