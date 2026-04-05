// U === D && L === R 인지 판별
// 3분
var judgeCircle = function (moves) {
  const map = new Map();

  for (const move of moves) {
    map.set(move, (map.get(move) ?? 0) + 1);
  }

  return map.get("U") === map.get("D") && map.get("L") === map.get("R");
};