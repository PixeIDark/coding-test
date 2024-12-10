// 단일 종류의 문자롷만 구성된 특수 문자열 찾기 없으면 3회 이상 나타나는 얘 찾기 없으면 -1

const s = "aaaa";
// Output: 1
// Explanation: The longest special substring which occurs thrice is "a": substrings "abcaba", "abcaba", and "abcaba".
//     It can be shown that the maximum length achievable is 1.

// map 으로 넣어버려? 나온 횟수 저장하고 3이상 일시만
// 특수반이랑 일반반으로 나눠서 저장해야함.
// char * 3 <= s.length 로 거를수 있음
var maximumLength = function (s) {
  const specials = new Map();
  const normals = new Map();

  let sMax = 0;
  let nMax = -1;
  // 요소 하나 찝어서 퍼지는 식으로 ㄱㄱ
  for (let i = 0; i < s.length; i++) {
    let str = s[i];

    // 특수반에 넣기
    let isSpecial = true;

    specials.set(str, (specials.get(str) || 0) + 1);
    if (specials.get(str) >= 3) sMax = Math.max(sMax, str.length);

    for (let j = i + 1; j < s.length; j++) {
      // str[0] 과 같으면 특수반 아니면 일반반
      str += s[j];
      if (s[j] !== str[0]) isSpecial = false;

      if (isSpecial) specials.set(str, (specials.get(str) || 0) + 1);
      else normals.set(str, (normals.get(str) || 0) + 1);

      if (specials.get(str) >= 3) sMax = Math.max(sMax, str.length);
      if (normals.get(str) >= 3) nMax = Math.max(nMax, str.length);
    }
  }

  return sMax > 0 ? sMax : nMax;
  // return specials;
};

console.log(maximumLength(s));
