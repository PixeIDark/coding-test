// nums 의 연속된 하위 배열 중 최소 값이 minK, 최대 값이 maxK 인 것의 개수

const nums = [1, 3, 7, 5, 2, 7, 5], minK = 1, maxK = 5
// Output: 2
// Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].

// 슬라이딩 윈도우 구조로 가고 최소 값과 최대 값을 계속 업데이트하면 돼
var countSubarrays = function (nums, minK, maxK) {
    const n = nums.length
    const counts = new Map()
    const irregulars = new Map()

    nums.forEach((num, idx) => {
        if (num < minK || num > maxK) irregulars.set(idx, true)
    })

    let result = 0
    let left = 0
    let right = 0
    // 처음부터 한번 순회해서 이레귤러 위치 파악해두고, 이레귤러와 left, right 의 거리를 이용해서 값을 측정하는거는?
    // left 와 right 가 이레귤러 사이에 있어야해
    // right 가 증가하다가 이레귤러에 걸리면 반응해야함 만약에 minK, maxK 가 counts 에걸리지 않으면 이레귤러 다음에 left랑 right를 초기화시키고 다시 시작
    // 매 순간 minK, maxK has 하다가 되면 left 를 최대한 당겨오고 (이레귤러 안걸린다는 가정하에)
    //

    while (right < n) {
        const addNum = nums[right]
        // map 자료구조를 만들고, 키가 요소 값이 빈도
        // 또 다른 map 은 min 보다 작거나 max 보다 큰 얘들을 키 인덱스 값 불리언 형식으로 저장
        // left, right 가 변화할때마다 map.delete(left or right) 로 값 제거
        // 슬라이딩 윈도우가 유효한 조건은 기본 map.has(minK or maxK) 존재, 이질 map.size 가 0 이여야함
        if (addNum === minK || addNum === maxK) counts.set(addNum, (counts.get(addNum) ?? 0) + 1)
        if (addNum > maxK) irregulars.set(right, true)
        if (addNum < minK) irregulars.set(right, true)

        // 범위 안에 이레귤러가 존재하면 계속 left++ 해서 삭제시켜나가야함 irregulars.size === 0 일 때까지
        while (counts.has(minK) && counts.has(maxK)) {

        }

        right++
    }

    console.log({counts}, {irregulars})
};

console.log(countSubarrays(nums, minK, maxK))