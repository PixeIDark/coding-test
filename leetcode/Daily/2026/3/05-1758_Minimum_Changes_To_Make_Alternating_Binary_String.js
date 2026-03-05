// "010101" 패턴 만들기 위한 최소 작업 횟수 반환
// "1010010101"
// "1010101010" 6
// "0101010101" 4
// 둘 중 하나의 구간의 요소들을 모두 반전해야하는 경우 짧은 구간 하기
// "0000001010101001"
// "0101010101010101" 13
// "1010101010101010" 5
// "1010" 패턴과 "0101" 패턴 둘다 해보고 연산 적은거 반환
// 13분
var minOperations = function (s) {
  const calculator = (str, first, second) => {
    const n = str.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
      if (str[i] !== first) count++;
      [first, second] = [second, first];
    }

    return count;
  };

  const zero = calculator(s, "0", "1");
  const one = calculator(s, "1", "0");

  return Math.min(zero, one);
};