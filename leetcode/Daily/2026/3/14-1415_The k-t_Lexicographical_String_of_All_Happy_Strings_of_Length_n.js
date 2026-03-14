// 길이가 n인 연속 중복없는 문자열을 사전순으로 정렬시켰을 때 k번째 문자열 출력 없으면 "" 출력
// 1. dfs로 모든 문자열 만들기
// 2. sort 정렬 후 k번째 반환
// 7분
var getHappyString = function (n, k) {
  const abc = ["a", "b", "c"];
  const arr = [];

  const dfs = (str, index) => {
    if (index === n) {
      arr.push(str);
      return;
    }

    for (let i = 0; i < abc.length; i++) {
      const char = abc[i];

      if (str.at(-1) !== char) dfs(str + char, index + 1);
    }
  };

  dfs("", 0);

  return arr[k - 1] || "";
};