// num: 변의 길이
// num들을 조합해서 가능한 삼각형을 몇개 만들 수 있는지
// 삼각형의 조건: 최고 길이의 변 < 나머지 변의 합
// map 생성, (변의 길이) => 빈도
// map 을 순회하면서 각 키를 최고변으로 하고 b: 3 c: 3일 경우 => 15
// b * c + (b - 1) * b / 2 + (c - 1) * c / 2
// 아니다 nums 오름차순으로 정렬하고, nums[i] + nums[j] > nums[k]
// count += k - j, k 는 역방향 탐색, 나머지는 정방향
// [1,2,3,4,5,6,7,8,9] i = 2, j = 3, k = 5, count += 2
// 일단 k 탐색을 그냥해보고 tle 뜨면 이진탐색
// 37분
var triangleNumber = function (nums) {
    nums.sort((a, b) => a - b)

    const n = nums.length
    let count = 0

    // [2,2,3,4] 3
    // tle 이진 탐색 ㄱㄱ, nums[i], nums[j]를 인자로 받고, 와일문에서 nums[mid] 값 조정해서 탐색
    const bs = (a, b) => {
        const target = nums[a] + nums[b]
        let left = b + 1
        let right = n - 1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (target > nums[mid]) { // 얘는 어? 되네? 더 높은 인덱스도 될까? 하는 느낌으로
                left = mid + 1
            } else {// 안되는군. 인덱스를 낮춰야한다는 느낌
                right = mid - 1
            }
        }
        // 못찾는 경우도 있을꺼임
        // left, right가 j 이하면 못찾은 거임
        return right
    }

    // j를 뒤에서부터 시작한 뒤, 성공할 경우 (bs(i, j) - j - 1) * (bs(i, j) - j)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            // [2,2,3,4]
            // 첫 bs(i, j)는 2가 나와야함
            count += bs(i, j) - j
        }
    }


    return count
};