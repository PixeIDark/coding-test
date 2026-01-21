// 기능이 몇개씩 배포되는지 [] 에 담아서 반환
// 모든 기능은 완성되어도 앞에있는 기능이 배포되기전까지 배포될 수 없음
// progresses[i] 보다 뒤에 존재하는 요소중 먼저 완성된 기능의 개수를 k
// k + 1 을 result:[] 요소로 push
// 1. progresses를 순회하면서 현재의 요소가 몇일 걸리는지 계산
// 2. 계산 값 a 를 저장하고, 다음 요소로 넘어가서 계산 값 b 를 만들어서 비교
// 3. a < b 일시 바로 1반환 a에 b 할당, a >= 일시 k++ 하고 다음 요소 계산해서 b에 할당
// 24분
function solution(progresses, speeds) {
  const result = [];
  let curr = Math.ceil((100 - progresses[0]) / speeds[0]);
  let count = 1;
  // 길이가 1인 경우에 ㅇㅇ 가능하다
  // 길이가 0이면 progresses[0]에서 인덱스 오류가 발생할 수 있어

  for (let i = 1; i < speeds.length; i++) {
    const progress = progresses[i];
    const speed = speeds[i];
    const next = Math.ceil((100 - progress) / speed);

    if (curr < next) {
      result.push(count);
      count = 1;
      curr = next;
    } else {
      count++;
    }
  }

  result.push(count);

  return result;
}