// k번 이상 신고당하면 정지당함. 각 유저별 정지시킨 유저 개수 출력, 횟수는 최대 1회

const p = 1,
  id_list = ["muzi", "frodo", "apeach", "neo"],
  report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
  ],
  k = 2;
// Output: [2, 1, 1, 0];

const a = new Set([1, 2, 3]);
console.log([...a.values()]);

// 신고당한 횟수. { frodo: [k, muzi]}
// 신고한 종류 {muzi: 4} <= 마지막에 횟수 채우기
// id_list.length + report.length
// 시간복잡도 최상, 가독성 구데기
function solution(id_list, report, k) {
  const criminals = {};
  const reporters = {};

  report.forEach((e) => {
    const [reporter, criminal] = e.split(" ");

    if (!criminals[criminal]) {
      criminals[criminal] = [1, new Set()];
      criminals[criminal][1].add(reporter);
    } else if (!criminals[criminal][1].has(reporter)) {
      criminals[criminal][0]++;
      criminals[criminal][1].add(reporter);
    }

    if (!reporters[reporter]) reporters[reporter] = new Set();
    reporters[reporter].add(criminal);
  });
  // reporters set 에담긴요소 criminals에 순회 때려서 k 이상이면 muzi++

  const result = new Array(id_list.length).fill(0);

  for (let i = 0; i < id_list.length; i++) {
    if (!reporters[id_list[i]]) continue;
    const arr = [...reporters[id_list[i]].values()] || [];

    while (arr.length) {
      const criminal = arr.pop();
      if (criminals[criminal][0] >= k) result[i]++;
    }
  }

  return result;
}
// {
//     criminals: {
//   frodo: [ 2, Set(2) { 'muzi', 'apeach' } ],
//   neo: [ 2, Set(2) { 'frodo', 'muzi' } ],
//   muzi: [ 1, Set(1) { 'apeach' } ]
// },
//     reporters: {
//         muzi: Set(2) { 'frodo', 'neo' },
//         apeach: Set(2) { 'frodo', 'muzi' },
//         frodo: Set(1) { 'neo' }
//     }
// }

console.log(solution(id_list, report, k));
