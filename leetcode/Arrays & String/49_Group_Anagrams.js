// 이름 순서 바꾸면 똑같아지는 얘들 분류하기

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// 1. 함수를 만들자 객체를 생성하여 str의 문자를 key 문자개수를 value로 저장하는
// 2. 배열을 생성하자
// 3. for문 or map을 돌려서 함수에 넣는다
// 4. 객체들을 배열에 담아주자.
// 5. while문을 통해 왼쪽과 오른쪽끝을 비교한다. 또 그안에서 for문으로 키 값 비교해야함
// 6. false일시, 오른쪽은 왼쪽으로 한칸씩 이동
// 7. true일시, 해당하는 index의 strs를 배열에 담고, 오른쪽은 왼쪽으로 한칸씩 이동
// 8. 왼쪽과 오른쪽의 차이가 1이면 왼쪽에 해당하는 index의 strs를 배열에 담고 오른쪽 위치 초기화.
// 5. 배열을 length를 기준으로 sort로 정렬
var groupAnagrams = function (strs) {
  let map = new Map();

  for (let str of strs) {
    const str2 = str.split("").sort().join();

    if (!map.has(str2)) {
      map.set(str2, []);
    }
    map.get(str2).push(str);
  }

  return [...map.values()].sort((a, b) => a.length - b.length);
};

console.log(groupAnagrams(strs));
// console.log(strs);
