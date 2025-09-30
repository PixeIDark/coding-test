// 요소 두개 합쳐서 하위로 계속 진행 % 10
// 7분
var triangularSum = function (nums) {
    while (nums.length > 1) {
        for (let i = 1; i < nums.length; i++) {
            nums[i - 1] = (nums[i] + nums[i - 1]) % 10
        }
        nums.pop()
    }

    return nums[0]
};