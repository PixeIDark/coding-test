// spell * potions = powers: [], power >= success 일경우 count++
// [count1, count2] 반환
// limit = sucess / spell, limit을 오름차로 정렬한 potions 에 이진 탐색으로 찾고, n - right
// 21분
var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b)

    const result = []

    for (const spell of spells) {
        const limit = success / spell
        let left = 0
        let right = potions.length - 1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            const potion = potions[mid]

            if (potion >= limit) right = mid - 1
            else left = mid + 1
        }

        result.push(potions.length - left)
    }

    return result
};
