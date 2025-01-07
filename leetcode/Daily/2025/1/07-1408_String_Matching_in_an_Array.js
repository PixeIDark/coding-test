// 하위 문자열 모두 출력

const words = ["leetcode", "et", "code"];
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
//     ["hero","as"] is also a valid answer.

// 길이가 크거나 같아야 함
var stringMatching = function (words) {
  words.sort((a, b) => b.length - a.length);

  const result = [];

  const matching = (originWord, luringWord, luringIndex) => {
    let originIndex = 1;
    while (originIndex < originWord.length) {
      if (originWord[originIndex] !== luringWord[luringIndex]) {
        return false;
      }

      originIndex++;
      luringIndex++;
    }

    return true;
  };

  while (words.length > 1) {
    const originWord = words.pop();

    for (const luringWord of words) {
      let isMatching = false;
      for (let i = 0; i < luringWord.length; i++) {
        if (luringWord - i < originWord.length) break;

        if (originWord[0] !== luringWord[i]) continue;
        // luringWord[i+1] 부터 originWord[1이랑 비교하는 함수]
        // 모두 같으면 true 값 출력하자

        if (matching(originWord, luringWord, i + 1)) {
          result.push(originWord);
          isMatching = true;
          break;
        }
      }
      if (isMatching) break;
    }
  }

  return result;
};

// includes 까먹은 범부새끼..
console.log(stringMatching(words));
