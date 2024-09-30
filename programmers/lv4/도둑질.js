// 각 집들은 서로 인접한 집들과 방범장치가 연결되어 있기 때문에 인접한 두 집을 털면 경보가 울립니다.
// 각 집에 있는 돈이 담긴 배열 money가 주어질 때, 도둑이 훔칠 수 있는 돈의 최댓값을 return 하도록 solution 함수를 작성하세요.

const money = [1, 100, 102, 105];
// output = 103

// 비트마스터 쓰는데 조건은 인접한 배열끼린 넣을 수 없음.
// 씹구데기 시간초과함 ㅋㅋ
// function solution(money) {
//   let nums = 1 << money.length;
//   let result = 0;

//   for (let i = 0; i < nums; i++) {
//     let temp = 0;
//     for (let j = 0; j < money.length; j++) {
//       if (i & (1 << j)) {
//         temp += money[j];
//         j++;
//       }
//     }
//     result = Math.max(result, temp);
//   }
//   return result;
// }

function solution(money) {
  let result = 0;
  let arr = [];
  for (let i = 0; i < money.length; i++) {
    if (money[i] < arr[arr.length - 1]) arr.push(money[i]);
  }
}
console.log(solution(money));
