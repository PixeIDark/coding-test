// 첫 단어는 Enter, Leave, Change 중 하나이다.
// 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
// 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
// 최종적인 닉네임을 알아야함
// 1. id => nickname 해시맵 만들기
// 2. Enter || Change 명령어 일시, 해시맵 갱신
// 3. 다시 record 순회하면서 id 참조로 닉네임을 할당받아서 로그만들기 (Enter | Leave)
// 18분
function solution(record) {
  record = record.map((el) => el.split(" "));
  const map = new Map();
  const arr = [];

  // 입장은 안하고 퇴장만 하는 유저 아마도 없을 것
  for (const [order, id, name] of record) {
    if (order === "Enter" || order === "Change") map.set(id, name);
    if (order === "Enter" || order === "Leave") arr.push([order, id]);
  }

  const result = [];

  for (const [order, id] of arr) {
    const 명사 = map.get(id) + "님이 ";
    const 동사 = order === "Enter" ? "들어왔습니다." : "나갔습니다.";
    result.push(명사 + 동사);
  }

  return result;
}