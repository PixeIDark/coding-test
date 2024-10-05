// inclusive 에서 숫자가 포함된 문자열이 주어지면 2-9숫자가 나타낼 수 있는 모든 가능한 문자 조합을 반환합니다.
// 어떤 순서 로든 답을 반환합니다 .
// 숫자에서 문자로의 매핑(전화기 버튼과 마찬가지로)은 아래와 같습니다. 1은 어떤 문자에도 매핑되지 않는다는 점에 유의하세요.

const digits = "23";
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

const numbers = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

// 하.. 일단 for문 갈겨보자.
// 생각해보니 for문 불가능하다.
// 1. digits를 배열로바꾸고, i는 길이 긴 쪽 따라가야함.
// 2. 배열의 길이만큼 비교하게 해야함.
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let result = [];
  const bt = (k, strs) => {
    if (k === digits.length) {
      result.push(strs);
      return;
    }

    const arr = numbers[digits[k]];
    for (const str of arr) {
      bt(k + 1, strs + str);
    }
  };
  bt(0, "");
  return result;
};

// console.log(
//   digits.split("").map((char) => {
//     return numbers[char];
//   })
// );

console.log(letterCombinations(digits));
