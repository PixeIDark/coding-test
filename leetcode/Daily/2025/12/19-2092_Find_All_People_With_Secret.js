// 비밀은 같은시간에서 받는 동시에 공유할 수 있다.
// 비밀 알고 있는 사람의 목록을 배열로 반환
// 1. 시간을 기준으로 오름차 정렬
// 2. 같은 시간인 사람들을 모두 set에 넣기
// 3. set.has 로 비밀을 알고있는 사람이 한명이라도 있나조사
// 4. 있으면 비밀을 아는 사람 목록에 추가하기
// 65분
var findAllPeople = function (n, meetings, firstPerson) {
  meetings.sort((a, b) => a[2] - b[2]);
  const set = new Set();
  const times = [];
  const share = new Set([0, firstPerson]);

  for (const [a, b, time] of meetings) {
    set.add(time);
    if (!times[set.size - 1]) times[set.size - 1] = [];
    times[set.size - 1].push([a, b]);
  }

  for (const meeting of times) {
    const newShare = new Set();
    const graph = [];

    for (const [a, b] of meeting) {
      if (!graph[a]) graph[a] = [];
      if (!graph[b]) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);

      if (share.has(a)) newShare.add(a);
      if (share.has(b)) newShare.add(b);
    }

    const queue = [...newShare];
    while (queue.length > 0) {
      const curr = queue.shift();
      share.add(curr);

      for (const next of graph[curr]) {
        if (!share.has(next)) {
          share.add(next);
          queue.push(next);
        }
      }
    }
  }

  return [...share];
};