// 사이클 아닌 얘들 제외 하자.

const favorite = [2, 2, 1, 2];
// Output: 4
// Explanation:
//     The above figure shows how the company will invite employees 0, 1, 3, and 4, and seat them at the round table.
//     Employee 2 cannot be invited because the two spots next to their favorite employee 1 are taken.
//     So the company leaves them out of the meeting.
//     The maximum number of employees that can be invited to the meeting is 4.

// 시작하면 자기 자신에게 다시 와야함 아니면 싸이클이 아님.
// 사이클 인증된 index 는 건너띄기 하자.
// 일단 싸이클 돌면 방문한 index 표시하고, 싸이클이 맞으면 얘네 그대로 쓰고, 아니면 전 인덱스를 복붙한다.
var maximumInvitations = function (favorite) {
  // 방문 순서대로 배열에 넣고 첫번째와 마지막 요소가 일치하는 수간 걔들은 싸이클 임. 인덱스로 저장해야홤
  const vis = new Set();
  let currVis = new Set();
  // 체인을 고려해야해

  const dfs = (curr, set, obj) => {
    if (currVis.has(curr)) return [0, -1];

    if (set.has(curr)) {
      return [set, obj[curr]];
    } else set.add(curr);
    vis.add(curr);
    obj[curr] = set.size - 1;
    const next = favorite[curr];

    if (next === undefined) {
      return [set, -1];
    }

    return dfs(next, set, obj);
  };

  let result = 0;

  for (let i = 0; i < favorite.length; i++) {
    if (vis.has(i)) continue;
    // 싸이클 아니면 vis 넣어라
    const [set, index] = dfs(i, new Set(), {});

    if (index !== -1) result += set.size - index;
    currVis = vis;
  }

  return result;
};

console.log(maximumInvitations(favorite));
