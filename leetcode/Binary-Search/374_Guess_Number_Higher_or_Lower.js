// 추측 값 반환해주면 반환값에 맞춰서 이진탐색

const n = 10, pick = 6
// Output: 6

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return         -1 if num is higher than the picked number
 *                  1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// 3분
var guessNumber = function (n) {
    let left = 1
    let right = n

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (guess(mid) === 1) left = mid + 1
        else if (guess(mid) === -1) right = mid
        else return mid
    }
};