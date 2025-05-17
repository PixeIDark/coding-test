// 0 을 배열 끝으로 이동

const nums = [0, 1, 0, 3, 12]
// Output: [1,3,12,0,0]

// 배열의 복사본을 만들지 않고 그 자리에서 이 작업을 수행해야 합니다 .
// 후속 조치: 총 작업 수를 최소화할 수 있나요?
// 0 만나면 nums 에 푸시하고 0 삭제 시켜주자
// 뒤에서부터 시작해야 순서 안꼬임
// 10분
var moveZeroes = function (nums) {
    const n = nums.length
    let write = 0
    let count = 0

    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) nums[write++] = nums[i]
        else count++
    }

    for (let i = n - count; i < n; i++) {
        nums[i] = 0
    }
};

console.log(moveZeroes(nums))