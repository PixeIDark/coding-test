// 두개의 포인트 모두 높이가 같으면 어느쪽을 이동시켜야할지
// 몰라 암거나 이동시켜걍
// 9분
var maxArea = function (height) {
    const n = height.length
    let result = 0

    for (let left = 0, right = n - 1; left < right;) {
        let h = Math.min(height[left], height[right])
        const w = right - left
        result = Math.max(result, w * h)

        if (height[left] > height[right]) right--
        else left++
    }

    return result
};