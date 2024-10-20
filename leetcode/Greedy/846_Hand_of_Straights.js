// 그룹 valid 크기가 같고 연속된 카드 로 구성 되도록

const hand = [1, 2, 2, 4],
  groupSize = 2;
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

// 방문한 hand[i]는 "a"로 교체
// 조건에 맞는 카드를 못 넣는 상황이면 즉시 false 반환
// 일단 sort갈겨보자
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;

  let saveCards = new Map();
  for (const card of hand) {
    saveCards.set(card, (saveCards.get(card) || 0) + 1);
  }

  const sortedCards = [...new Set(hand)].sort((a, b) => a - b);

  for (const card of sortedCards) {
    if (saveCards.get(card) > 0) {
      const count = saveCards.get(card);

      for (let i = 0; i < groupSize; i++) {
        const currentCard = card + i;
        const currentCount = saveCards.get(currentCard) || 0;

        if (count > currentCount) {
          return false;
        }

        saveCards.set(currentCard, currentCount - count);
      }
    }
  }

  return true;
};

console.log(isNStraightHand(hand, groupSize));
