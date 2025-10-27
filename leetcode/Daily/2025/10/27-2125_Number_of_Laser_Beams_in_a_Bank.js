// 레이저 개수 구하기
// bank[i] 에서 "1"의 개수를 mapping
// bank.length - 2까지 진행하면서 서로 곱함
// 5분
var numberOfBeams = function(bank) {
  const arr = []

  for(const str of bank) {
    let count = 0

    for(const char of str) {
      if(char === "1") count++
    }

    arr.push(count)
  }

  let result = 0

  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i + 1] === 0) {
      arr[i + 1] = arr[i]
      continue
    }

    result += arr[i] * arr[i + 1]
  }

  return result
};