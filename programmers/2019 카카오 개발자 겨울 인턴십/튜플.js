// 결과 구하기

const p = 1,
  s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
// OutPut: [3, 2, 4, 1]

function solution(s) {
  const arr = [[]];

  let index = 0;
  let str = "";
  for (let i = 2; i < s.length - 1; i++) {
    const char = s[i];

    if (char === "}" && i !== s.length - 2) continue;

    if (char === "{") {
      index++;
      arr[index] = [];
      continue;
    }

    if (char === "," || i === s.length - 2) {
      arr[index].push(str * 1);
      str = "";
    } else str += char;
  }
  arr.sort((a, b) => a.length - b.length);

  const set = new Set();
  for (const a of arr) {
    a.forEach((e) => set.add(e));
  }

  return [...set];
}

console.log(solution(s));
