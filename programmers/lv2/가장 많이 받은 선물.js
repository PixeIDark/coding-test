const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];
// result 2

// friends 요소로 gifts 필터.
// const cookies = {
//   muzi: {
//     ryan:[주고 받은 거, 선물지수],
//     frodo:[주고 받은 거, 선물지수],
//     neo:[주고 받은 거, 선물지수].
//   }

// }
function solution(friends, gifts) {
  const giftData = {};

  // 초기 데이터 구조 설정
  friends.forEach((friend) => {
    giftData[friend] = {
      giftIndex: 0,
      exchanges: {},
    };
    friends.forEach((other) => {
      if (friend !== other) {
        giftData[friend].exchanges[other] = [0, 0]; // [준 선물, 받은 선물]
      }
    });
  });

  // 선물 기록 처리
  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(" ");
    giftData[giver].exchanges[receiver][0]++;
    giftData[receiver].exchanges[giver][1]++;
    giftData[giver].giftIndex++;
    giftData[receiver].giftIndex--;
  });

  // 다음 달 선물 계산
  const nextMonthGifts = {};
  friends.forEach((friend) => (nextMonthGifts[friend] = 0));

  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const friend1 = friends[i];
      const friend2 = friends[j];
      const given1to2 = giftData[friend1].exchanges[friend2][0];
      const given2to1 = giftData[friend2].exchanges[friend1][0];

      if (given1to2 > given2to1) {
        nextMonthGifts[friend1]++;
      } else if (given1to2 < given2to1) {
        nextMonthGifts[friend2]++;
      } else {
        if (giftData[friend1].giftIndex > giftData[friend2].giftIndex) {
          nextMonthGifts[friend1]++;
        } else if (giftData[friend1].giftIndex < giftData[friend2].giftIndex) {
          nextMonthGifts[friend2]++;
        }
      }
    }
  }

  return Math.max(...Object.values(nextMonthGifts));
}

console.log(solution(friends, gifts));
