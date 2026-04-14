// 입력값은 모든 로봇 수리가능
// 모든 로봇 수리되도록 최소 이동거리 반환
// 1 0 1 0 0 0 0 0 0 1 0 1
// 0 0 0 0 1 1 1 1 0 0 0 0
// 로봇이 좌우 가장 가까운 공장 탐색
// 포화된 공장은 제거
// 1. 로봇과 공장 오름차 정렬
// 2. 첫번재 로봇과 공장 비교 후 로봇이 작거나 같으면 첫번째 공장으로 이동, 크면 두번째 공장과 비교 후 두번째 공장보다 작으면 가까운 쪽 선택 같으면 두번째 공장으로 이동, 크면 세번째 공장과 비교...
// 3. 마지막으로 사용한 공장 인덱스를 저장 후 다음 로봇에 사용, 모두 소진된 공장일경우 다음 인덱스로
// TODO: 벽
var minimumTotalDistance = function (robot, factory) {
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);

  console.log({robot, factory});
  let last = 0;
  let result = 0;

  for (const bot of robot) {

    for (let i = last; i < factory.length - 1; i++) {
      const left = factory[i][0];
      const right = factory[i + 1][0];

      if (bot <= left) {
        factory[i][1]--;
        last = i;
      } else if (bot >= right) {
        last = i + 1;
      } else if (bot > left && bot < right) {
        if (bot - left <= right - bot) {
          factory[i][1]--;
          last = i;
        } else {
          factory[i + 1][1]--;
          last = i + 1;
        }
      } else {
        continue;
      }

      if (factory[last] === 0) last++;

      console.log(result);
      result += Math.abs(factory[last][0] - bot);
      break;
    }
  }

  return result;
};