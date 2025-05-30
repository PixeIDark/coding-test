// 15분
var successfulPairs = function (spells, potions, success) {
    // potions 오름차 정렬 후
    // potions[mid] * spells[i] 값을 찾아내고 해당 인덱스 j, n - j 값 반환
    potions.sort((a, b) => a - b)


    const binary = (spell) => {
        let left = 0
        let right = potions.length - 1

        if (potions[right] * spell < success) return 0

        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            const target = potions[mid] * spell

            if (target < success) left = mid + 1
            else right = mid
        }

        return potions.length - left
    }

    const result = []

    for (let i = 0; i < spells.length; i++) {
        const pairs = binary(spells[i])
        result.push(pairs)
    }

    return result
};