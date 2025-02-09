// 색 종류 구하기.

const limit = 4,
  queries = [
    [0, 1],
    [1, 2],
    [2, 2],
    [3, 4],
    [4, 5],
  ];
// Output: [1,2,2,3]

// 1. map 두개로 관리 해서 필요한 데이터 빠르게 탐색.
// colors, balls 각각 색, 공을 키 값으로 하고, colors 는 객체 밸류 , balls 는 number 밸류
// 기본적으로 colors.size 를 result 에 푸시함
// 색이 덮어 씌어질 경우 colors balls 지워라 객체 키 자체를
//ㅗㅗㅗㅗㅗ
// 2. 이차원 배열  1차는 공 종류 2차는 queries.length,
// [[0,0,0,0,0] row 는 공 col 은 색
// [1,0,0,0,0]]
var queryResults = function (limit, queries) {
  const colors = new Map();
  const balls = new Map();

  const result = [];
  for (const [ball, color] of queries) {
    if (balls.has(ball)) {
      const prevColor = balls.get(ball);
      if (colors.has(prevColor)) {
        colors.get(prevColor).delete(ball);
        if (colors.get(prevColor).size === 0) colors.delete(prevColor);
      }
    }
    balls.set(ball, color);

    if (!colors.has(color)) colors.set(color, new Map()); // 여기서 먼저 Map 초기화
    colors.get(color).set(ball, 1);

    result.push(colors.size);
  }

  return result;
};

console.log(queryResults(limit, queries));
