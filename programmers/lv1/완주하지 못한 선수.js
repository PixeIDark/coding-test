// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 1. participant 를 (el) => freq 로 자료변환
// 2. completion 순회하면서 map 1씩 감소 시키고 0이면 제거
// 3. 하나남은 map key가 정답
// 6분
function solution(participant, completion) {
  const freq = new Map();

  for (const key of participant) {
    freq.set(key, (freq.get(key) ?? 0) + 1);
  }

  for (const key of completion) {
    const value = freq.get(key);
    if (value === 1) freq.delete(key);
    else freq.set(key, value - 1);
  }

  return freq.keys().next().value;
}