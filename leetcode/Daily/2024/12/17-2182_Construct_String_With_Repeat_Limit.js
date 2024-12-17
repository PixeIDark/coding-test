// repeatLimit 을 지키는 가장 긴 사전순

const s = "xyutfpopdynbadwtvmxiemmusevduloxwvpkjioizvanetecnuqbqqdtrwrkgt",
  repeatLimit = 1;
// Output: "zzcccac"
// Explanation: We use all of the characters from s to construct the repeatLimitedString "zzcccac".
//     The letter 'a' appears at most 1 time in a row.
//     The letter 'c' appears at most 3 times in a row.
//     The letter 'z' appears at most 2 times in a row.
//     Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
//     The string is the lexicographically largest repeatLimitedString possible so we return "zzcccac".
//     Note that the string "zzcccca" is lexicographically larger but the letter 'c' appears more than 3 times in a row, so it is not a valid repeatLimitedString.

// 제한 이상 시, 높은 사전으로 대체하고 그다음에 다시 꺼내기.
// 역순의 dp를 만들고, 횟수 저장. 0 = "z", ["z", 3]
var repeatLimitedString = function (s, repeatLimit) {
  s = s.split("");
  s.sort((a, b) => (a < b ? -1 : 1));
  const map = new Map();
  s.forEach((e) => map.set(e, (map.get(e) || 0) + 1));

  const result = [];
  const stack = [...map.entries()];
  while (stack.length) {
    let [char, count] = stack.pop();

    for (let i = 0; i < count; i++) {
      if (i === repeatLimit && i !== count) {
        if (!stack.length) break;
        let [char2, count2] = stack.pop();
        result.push(char2);
        count2--;
        if (count2 !== 0) stack.push([char2, count2]);
        stack.push([char, count - i]);
        break;
      }
      result.push(char);
    }
  }

  return result.join("");
};

// function repeatLimitedString(s, repeatLimit) {
//   // 각 문자의 출현 빈도를 저장할 배열 (a-z: 0-25)
//   const freq = new Array(26).fill(0);
//
//   // 문자열의 각 문자 빈도수 계산
//   for (let char of s) {
//     freq[char.charCodeAt(0) - 97]++;
//   }
//
//   let result = "";
//   let consecutive = 0; // 현재 연속된 같은 문자의 수
//   let lastChar = -1; // 마지막으로 추가된 문자의 인덱스
//
//   while (true) {
//     let found = false;
//
//     // z부터 a까지 역순으로 순회 (사전순 최대를 위해)
//     for (let i = 25; i >= 0; i--) {
//       // 현재 문자가 있고, (마지막 문자와 다르거나 연속 제한에 걸리지 않음)
//       if (freq[i] > 0 && (i !== lastChar || consecutive < repeatLimit)) {
//         result += String.fromCharCode(i + 97);
//         freq[i]--;
//
//         if (i === lastChar) {
//           consecutive++;
//         } else {
//           consecutive = 1;
//         }
//         lastChar = i;
//         found = true;
//         break;
//       }
//     }
//
//     if (!found) break;
//   }
//
//   return result;
// }
console.log(repeatLimitedString(s, repeatLimit));
