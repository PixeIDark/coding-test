// 요소에 여분의 사탕 줬을 때 얘가 가장 많은 사탕 가진 아이인지 배열로 반환

const candies = [2, 3, 5, 1, 3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
//     - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

// 1. Math(...candies) 로 기준 값 정하고 캔디스에 포문 돌려서 하나하나 비교해보기
// 4분
var kidsWithCandies = function (candies, extraCandies) {
    const max = Math.max(...candies)

    return candies.map(candy => max <= candy + extraCandies)
};

console.log(kidsWithCandies(candies, extraCandies))