// valid 대신 순서 출력 결과가 많으면 그중 하나 출력, 유효한 결과가 없으면 []출력

const numCourses = 4,
  prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

// 객체로 풀어봐
var findOrder = function (numCourses, prerequisites) {};
