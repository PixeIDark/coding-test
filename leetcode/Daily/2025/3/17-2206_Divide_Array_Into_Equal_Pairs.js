// 같은 요소를 지닌 쌍으로 나눠 지는지.

const nums = [3, 2, 3, 2, 2, 2]
// Output: true
// Explanation:
//     There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
//     If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.


// 맵에 넣고 한번 더 들어오면 빼버리자
var divideArray = function (nums) {
    // 맵쩜키스가 언디파인드 떠야 트루임
    const map = new Map()

    for (const num of nums) {
        if (map.has(num)) map.delete(num)
        else map.set(num, 1)
    }

    return !map.size
};

console.log(divideArray(nums))