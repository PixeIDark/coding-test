var maximumTripletValue = function (nums) {
    let maxNum = 0
    let maxDiff = 0
    let result = 0

    for (const num of nums) {
        result = Math.max(result, maxDiff * num)

        maxDiff = Math.max(maxDiff, maxNum - num)

        maxNum = Math.max(maxNum, num)
    }

    return result
};