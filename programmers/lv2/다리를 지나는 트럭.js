// 트럭이 순서대로 [0]부터 가는지 아니면 최대 효율인지. 일단 순서대로라 가정 지문믿고
// weight - truck > 0 까지 최대한 낮춘 연산 횟수를 count
// result += count + bridge_length - 1
// result += 1
// 수학적으로 실패뜸, 직접해야함
// 34분
function solution(bridge_length, weight, truck_weights) {
  const bridge = Array(bridge_length).fill(0);
  let bridgeWeight = 0;
  let time = 0;

  while (truck_weights.length > 0 || bridgeWeight > 0) {
    time++;
    bridgeWeight -= bridge.shift();

    if (bridgeWeight + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      bridge.push(truck);
      bridgeWeight += truck;
    } else bridge.push(0);
  }

  return time;
}