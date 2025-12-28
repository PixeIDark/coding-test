// 음수개수 반환
// 1분
var countNegatives = function (grid) {
  return grid.flat().filter((x) => x < 0).length;
};