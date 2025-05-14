// nums 보고 1이면 a => b, 2이면 a => bc, 3이면 z => abc 이런식으로 변환해야함 t 하나마다

const s = "azbk", t = 1, nums = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
// Output: 8

// 1e9 + 7 로 모듈화
// 걍 nums 조회해서 하면 너무 시간복잡도가 커져 t * nums[i] * 26
// 포문에서 임시 dp 배열 만들어서 끝나면 합쳐줘야함
// s 를 배열에 개수 저장을하고, 이 배열을 t번 순회하는게 아니라 배열하나 * nums.length 순회로 종료시킴
// TODO: 벽, 절대 못품 걍 수학적 지식이 미천함
var lengthAfterTransformations = function (s, t, nums) {
    const MOD = 1e9 + 7
    const dp = Array(26).fill(0)

    for(const char of s) {
        const index = char.charCodeAt(0)
        dp[index]++
    }

    for(let i = 0; i < t; i++) {
        const temp = Array(26).fill(0)

        for(let j = 0; j < 26; j++) {
            dp[]
        }

    }



};