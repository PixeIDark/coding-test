// 두 큐 합 shift(), push()로 같게 만들기

const queue1 = [3, 2, 7, 2, 100],
  queue2 = [100, 4, 6, 5, 1];
// Output 2

// 1. 두 큐의 합 구하고 2로 나눈값 기준으로 큐 하나 조지기
// 2. 걍 큐 두개 비교해서 같게하기

// 반대로 pop(), unshift() 를 하려면 length * 2 -1 번 작업임.
// 두 큐 합치고 q1.length 기준으로 움직이셈.
// 작으면 r++ 크면 l++
// 즉, r은 인덱스 r 값 더하고, l은 인덱스 l값 빼면됨.
// return result 위치로 개억까당함 테스트 코드를 안보여주네..
function solution(queue1, queue2) {
  let total = 0;
  let luring = 0;
  for (let i = 0; i < queue1.length; i++) {
    luring += queue1[i];
    total += queue1[i] + queue2[i];
  }

  if (total % 2 !== 0) return -1;
  total /= 2;

  const arr = [...queue1, ...queue2];
  let left = 0;
  let right = queue1.length - 1;
  let result = 0;
  const chance = queue1.length * 3;

  while (result <= chance) {
    if (total === luring) return result;
    if (luring < total && right < arr.length - 1) {
      right++;
      luring += arr[right];
    } else if (luring > total && left <= right) {
      luring -= arr[left];
      left++;
    } else {
      break;
    }

    result++;
  }

  return -1;
}
// function solution(queue1, queue2) {
//   let total = 0;
//   let luring = 0;
//   for (let i = 0; i < queue1.length; i++) {
//     luring += queue1[i];
//     total += queue1[i] + queue2[i];
//   }
//   total /= 2;
//
//   // 선택지 두개임 받기만하기, 주고받기
//   // 받기만하기: 상대 큐의 맨앞의 값을 더함 +queue2[0]
//   // 주기만하기: 내큐 맨앞 값을 뺌 -queue1[0]
//   // 큐를 직접 건들긴 해야함. 근데 숫자 +-도 맨앞 맨뒤로 해주고
//   // luring이 total보다 크면 주고 작으면 받자
//   let result = 0;
//   while (result < queue1.length + queue2.length + 2) {
//     if (luring === total) {
//       return result;
//     }
//
//     if (luring > total) {
//       const n = queue1.shift();
//       queue2.push(n);
//       luring -= n;
//     } else {
//       const n = queue2.shift();
//       queue1.push(n);
//       luring += n;
//     }
//     result++;
//   }
//
//   return -1;
// }

console.log(solution(queue1, queue2));
