// 모든 과목 수강 가능한지 prerequisites[i][0] 을 수강하기 위해서는 prerequisites[i][1] 을 수강해야함

const numCourses = 2,
  prerequisites = [[1, 0]];
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
// [1,2] [2,3] [3,4] [4,2] <= 탐색중 [0]이 다시 조건으로 튀어나오게 되면 false임.
// 수강 조건과 함께 numCourses 개수로 이루어진 배열 인덱스에 넣어줄까?
// [0] 을 탐색해서 수강 조건인 [1] 탐색으로 넘어가고 얘를 또 수강 가능한지 탐색해야하나?
var canFinish = function (numCourses, prerequisites) {
  const arr = Array.from({ length: numCourses }, () => new Array());

  for (const [study, need] of prerequisites) {
    arr[study].push(need);
  }

  const vis = new Array(numCourses).fill(0);

  const bt = (index) => {
    if (vis[index] === 1) return false;

    if (vis[index] === 2) return true;

    vis[index] = 1;

    for (const course of arr[index]) {
      if (!bt(course)) return false;
    }
    vis[index] = 2;
    return true;
  };

  for (const a in arr) {
    if (!bt(a)) return false;
  }

  return true;
};
// [ [ 1 ], [ 0, 2 ], [] ]
console.log(canFinish(numCourses, prerequisites));
// heap= [0, 2]
