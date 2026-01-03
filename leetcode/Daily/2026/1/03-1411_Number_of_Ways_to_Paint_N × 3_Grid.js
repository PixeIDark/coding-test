// n: 행수, 인접한 셀이 같은 색을 사용하지 않게하고 그리드를 만들 때, 경우의 수 반환
// n = 3
// [1, 2, 1]
// [2, 1, 2]
// [1, 2, 1]
// 처음행은 12의 경우의 수를 가지고, 2색 6개, 3색 6개임
// 3색의 경우 4의 경우의수, 2색의 경우 5의 경우의수를 가짐
// 3색은 6개, 2색 6개
// 3색 이후 2=> 2, 3=> 2 창출
// 2색 이후 2=> 3, 3=> 2 창출
// 6 * 4 + 6 * 5 = 54
// 30 + 24
// 5 * 5 + 4 * 4
// n = 1
// 12에서 2색 6개, 3색 6개 창출
// n = 2
// 창출한 6개의 2색 하나당 2색 3개, 3색 2개 창출
// 창출한 6개의 3색 하나당 2색 2개, 3색 2개 창출
// 총 2색 30개, 3색 24개 => 54
// n = 3
// 창출한 30개의 2색에서 2색은 30 * 3개, 3색은 30 * 2개
// 창출한 24개의 3색에서 2색은 24 * 2개, 3색은 24 * 2개
// 총 2색 90 + 48개, 3색 60 + 48개 => 246
// n = 1 일 때, two = 6, three = 6
// n = 2 일 때, newTwo = two * 3 + three * 2, newthree = two * 2 + three * 2
// result = newTwo + newThree
// two = newTwo, three = newThree
// 74분
var numOfWays = function (n) {
  const mod = 1e9 + 7;
  let two = 6;
  let three = 6;

  for (let i = 1; i < n; i++) {
    const newTwo = two * 3 + three * 2;
    const newThree = two * 2 + three * 2;
    two = newTwo % mod;
    three = newThree % mod;
  }

  return (two + three) % mod;
};