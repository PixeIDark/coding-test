// 모든 요소가 0인 부분배열 개수 출력
// 슬라이딩각이 보임
// [0,0,0,2,0,0] 에서 0이 3연속인 구간에서 3 * 4 / 2 = 6, 0하위 배열 6개인식이 나옴
// 9분
var zeroFilledSubarray = function (nums) {
    let count = 0

    for (let l = -1, r = 0; l <= r, r < nums.length; r++) {

        while (nums[r] !== 0 && l < r) l++

        if (nums[r] === 0) count += r - l
    }

    return count
};