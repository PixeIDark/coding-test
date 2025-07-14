// 9분
var getDecimalValue = function (head) {
    const bits = []
    let node = head

    while (node) {
        bits.push(node.val)
        node = node.next
    }

    let result = 0
    let pow = 1

    for (let i = bits.length - 1; i >= 0; i--) {
        const bit = bits[i]
        result += bit * pow
        pow *= 2
    }

    return result
};