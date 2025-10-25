// 1턴 마다 1씩 증가, 7턴마다 6감소
// 14을 나누면 몫이 2 나옴
// 7 * 8 / 2 = 28, + 8 * 9 / 2 - 1 = 35
// 다음 몫으로 진행될 떄마다 7씩 증가함 첫 몫은 28고정
// 나머지는 ceil(몫) 부터 시작해서 구함 ex) 몫: 4, 나머지: 3 면 5 + 6 + 7
// 9분
var totalMoney = function (n) {
  const share = Math.floor(n / 7)
  const remain = n % 7
  let result = 0
  let gold = 28

  for (let i = 0; i < share; i++) {
    result += gold
    gold += 7
  }

  let silver = share + 1

  for (let i = 0; i < remain; i++) {
    result += silver
    silver++
  }

  return result
};