// 인풋 두개 받고 순서 바꾸면 같아지는지 여부

const s = "anagram";
const t = "nagaram";
// Output: true

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  if (s.length === 0) return true;

  const sMap = toMap(s);
  const tMap = toMap(t);

  const mapKeys = [...sMap.keys()];

  // 각 단어 빈도수 체크 후, 빈도가 같나 비교
  for (let i = 0; i < mapKeys.length; i++) {
    if (sMap.get(mapKeys[i]) !== tMap.get(mapKeys[i])) {
      return false;
    }
  }
  return true;
};

const toMap = (str) => {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1);
      continue;
    }
    map.set(str[i], map.get(str[i]) + 1);
  }
  return map;
};

console.log(isAnagram(s, t));
