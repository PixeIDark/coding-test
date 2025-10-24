// 숫자와 빈도수가 일치해야함
// n 보다 엄격하게큰 최소한의 숫자
// 숫자 자리수에 따라 나올수있는 포텐이 다름 ex) n = 1000 일시, 네자리이므로 최대 4가 나올수 있음
// 즉, 원본 n의 자리수에 따라 다름
// 세자리수 일시, 122, 212, 221, 333 가능
// n의 숫자들 빈도수를 체크하면서 n + 1부터 증가시키고 빈도수를 끊임없이 체크
// 34분, 걍 브루트포스문제인데 생각이 너무 많았음
var nextBeautifulNumber = function (n) {
  const isValid = (str) => {
    const nums = new Map()

    for (const char of str) {
      const i = Number(char)
      nums.set(i, (nums.get(i) ?? 0) + 1)
    }

    for (const [key, value] of nums) {
      if (key !== value) return false
    }

    return true
  }

  let i = n + 1

  while (true) {
    const str = String(i)

    if (isValid(str)) return i
    i++
  }
};