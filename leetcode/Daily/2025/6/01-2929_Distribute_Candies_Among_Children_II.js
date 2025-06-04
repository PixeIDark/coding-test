// 아이는 3명, n = 사탕의 총 개수, limit = 한 아이가 받을 사탕의 개수 제한(이하)
// limite = 1, n = 5, Math.ceil(5 / 3) = k = 2, k > limite 일시 0 출력
// 조합론
// l = 3, n = 7 들어올 수 있는 숫자 3,2 =>
// l = 3, n = 8  k = 3, limite - k + 1 = 1, 3,1 => 3개
// l = 3, n = 3, k = 1, limite - k + 1 = 3 => 10개
// 총 몇가지의 숫자가 들어갈 수 있냐를 먼저 구해야함
// n - 2 * limit <= k <= limit
// 숫자 가짓수 = limit - (n - 2 * limite)
// 총 숫자 가짓수 = n * (n - 1) / 2
// limite 1명 초과 = 3
// limite 2명 초과 = 3
// limite 3명 초과 = 1
// 벽
var distributeCandies = function (n, limit) {

};