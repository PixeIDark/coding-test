// tiles 의 가능성이 몇개인지 출력

const tiles = "AAB";
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

// 중복 허용 안하니까 set 에 기본적으로 넣고, 카운트할 떄 걸러내
var numTilePossibilities = function (tiles) {
  // 재귀 함수 안에서 포문 돌려서 해야해
  // 자기 자신의 인덱스는 포함 시키지 않게하고, 재귀를
  // 항상 set에 넣고 감별해야해
  const seen = new Set();

  const backtrack = (curr, remaining) => {
    if (curr.length > 0) {
      seen.add(curr);
    }

    for (let i = 0; i < remaining.length; i++) {
      if (i > 0 && remaining[i] === remaining[i - 1]) continue;

      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);

      backtrack(curr + remaining[i], newRemaining);
    }
  };

  tiles = tiles.split("").sort().join("");
  backtrack("", tiles);

  return seen.size;
};
