// encode 시 문자열로, decode 시 다시 배열로 만드셈.

const inPut = ["we", "say", ":", "yes"];

const outPut = ["we", "say", ":", "yes"];

// join인가 뭐 써가지고 문자열로 만들면됨.
// 길이를 기억해야해 각 문자마다
const encode = (strs) => {
  const numStrs = strs.map((item) => {
    return item.length + "#" + item;
  });

  return numStrs.join("");
};

// split으로 배열 만들면 됨. 원본 상태처럼 만들어야하는데 어카냐? 하 ㅋㅋ
const decode = (str) => {
  let arr = [];
  let i = 0;

  while (i < str.length) {
    let j = str.indexOf("#", i);
    if (j === -1) break; // # 없으면 종료

    let length = 1 * str.substring(i, j); // str[j - 1] 쓰면 두자리수부터 오류생김
    let start = j + 1;
    let end = start + length;

    arr.push(str.substring(start, end));
    i = end;
  }

  return arr;
};

console.log(encode(inPut));
console.log(decode(encode(inPut)));

// 교훈
// indexOf의 두번째 요소는 어디부터 탐색할지 순서 결정한다는거암
// while문과 for문의 명확한 차이에 대해 이해함
// substring의 존재 알게됨
