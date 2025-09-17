// 두 수의 공약수가 두개 이상인경우 최소공배수로 바꾸기
// 작업중 바꾸면 i--
// 공약수 확인 작업을 어떻게할지
// 1. 둘 중 작은 숫자로 % k 해보기
// TODO: 벽, 공식
var replaceNonCoprimes = function (nums) {
    for (let i = nums.length - 1; i >= 1; i--) {
        const a = nums[i]
        const b = nums[i - 1]
        let k = Math.min(a, b)

        while (k > 1 && (a % k !== 0 || b % k !== 0)) {
            k--
        }

        if (k > 1) {
            let j = Math.max(a, b)

            while (!(j % a === 0 && j % b === 0)) {
                j++
            }

            nums.splice(i - 1, i, j)
        }
    }

    return nums
};