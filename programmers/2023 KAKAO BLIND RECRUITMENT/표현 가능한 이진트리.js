// numbers => 이진문자열로 변환 => 이진트리로 가능한지여부
// 더미 노드가 일반 노드의 부모로 존재하는 경우 불가능
// 34분
function solution(numbers) {
    const canBinary = (start, end, parent, bit) => {
        if (start > end) return true

        const mid = Math.floor((start + end) / 2)
        const curr = bit[mid]

        if (parent === "0" && curr === "1") return false

        return canBinary(start, mid - 1, curr, bit) && canBinary(mid + 1, end, curr, bit)
    }

    const result = []

    for (const num of numbers) {
        let bit = num.toString(2)
        // 길이가 이진포화보다 작으면 강제로 0 덧붙여줌

        let len = 1

        while (len < bit.length) {
            len = len * 2 + 1
        }

        bit = "0".repeat(len - bit.length) + bit
        result.push(canBinary(0, bit.length - 1, "1", bit) ? 1 : 0)
    }

    return result
}