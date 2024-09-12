const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// 1. 분해해서 배열로 만들자
// 2. sort로 알파벳순으로 정렬시키고 맞는지 비교하면됨 맞는놈들끼리 같이 있게. (왕따는 혼자 넣음됨)

const stringToArray = (strs) => {
  const b = strs.map((item) => {
    return item.split("");
  });
  return b;
};

const a = (arrs) => {
  let b = [];
  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs.length; j++) {
      if (j <= i) j++;
      const arrs2 = [...arrs].slice();
      if (arrs2[i].sort() === arrs2[j].sort()) {
        // zzzzzzzㄹㅇ sort는 아에 변화시켜버리는거구나 => 얕은복사 떄문에 원본마저 sort가 변경시켜버림 => ?? 깊은 복사를 해도 원본 바뀜;
        b.push([arrs[i], arrs[j]]);
      }
    }
  }
  return b;
};

const z = stringToArray(strs);

console.log(z);
console.log(a(z));
