// 사탕 더미에서 사탕 나눠서 동일한 수의 사탕을 최대한 많이 k 명에게 줄 수있는 개수

const candies = [5, 8, 6], k = 3
// Output: 5
// Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.

// 최대 값의 개수를 k 개로 맞춰야한다
// 나눠줄 사탕 수를 최대치로 잡고 각 더미가 최대 사탕수로 나눠지면 k - 1
// k 0 되는 값이 최대 값임
var maximumCandies = function (candies, k) {

    let left = 0
    let right = Math.max(...candies)

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2)

        let count = 0

        for (const candy of candies) {
            count += Math.floor(candy / mid)
        }

        if (count >= k) left = mid
        else right = mid - 1
    }

    return left
};

console.log(maximumCandies(candies, k));