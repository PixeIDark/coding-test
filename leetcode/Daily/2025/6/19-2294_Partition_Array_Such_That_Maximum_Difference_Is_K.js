// 부분수열에서 최대값과 최소값의 차이가 k 이하이게 만들 수 있는 부분 수열 최소 개수
// 오름차순으로 정렬, 인덱스 i 에서 시작해서 j 까지를 범위로 설정.
// 범위의 기준은 마지막 인덱스 요소 - 첫 인덱스 요소가 k 이하일것
// 해당 조건을 판별해서 범위를 늘려가는 식으로
// 13분
var partitionArray = function (nums, k) {
    nums.sort((a, b) => a - b)

    let count = 1
    let start = nums[0]
    let end = nums[0]

    for (let i = 1; i < nums.length; i++) {
        end = nums[i]

        if (end - start > k) {
            start = nums[i]
            count++
        }
    }

    return count
};