// 겹치는 풍선 만나면 제거해야함. 니드타임 적은순으로 제거 pq?
// 12분
var minCost = function (colors, neededTime) {
  const stack = [0];
  let result = 0;

  for (let i = 1; i < colors.length; i++) {
    // 팝을하고 푸시할지 => [i - 1]이 제거
    // 푸시하지 않고 넘어갈지 [i]이 제거
    const prevIndex = stack.at(-1);
    const prev = colors[prevIndex];
    const curr = colors[i];

    if (prev !== curr) {
      stack.push(i);
      continue;
    }

    if (neededTime[prevIndex] < neededTime[i]) {
      result += neededTime[prevIndex];
      stack.pop();
      stack.push(i);
    } else result += neededTime[i];
  }

  return result;
};