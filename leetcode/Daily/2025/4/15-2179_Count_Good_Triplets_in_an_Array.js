// 둘 모두에서 인덱스 순서대로 되는 부분 집합 개수

const nums1 = [4, 0, 1, 3, 2], nums2 = [4, 1, 0, 2, 3]
// Output: 1
// Explanation: The 4 good triplets are (4,0,3), (4,0,2), (4,1,3), and (4,1,2).

// num1 과 num2 는 순열관계
// num2 만 인덱스와 요소 가진 2차원 오름차 배열로 재정렬
// num1 에서 x 요소를 정하면 num2 에서 이진 탐색으로 요소를 찾고 인덱스를 기록
// num1 에서 y 요소를 이어서 찾고 num2 에서 이진 탐색으로 찾고 기억한 인덱스보다 크기가 큰지 비교후 멈추거나 이어감
// TODO: 벽-시간초과
var goodTriplets = function (nums1, nums2) {
    nums2 = nums2.map((n, i) => [n, i]).sort((a, b) => a[0] - b[0])

    // nums1 = [5, 0 ,1, 2, 3] nums2 = [1, 0, 5, 2, 3]
    // r = [[0, 3], [1, 1], [2, 3], [3, 3], [4, 4]]
    // 여기서 1,3 은 일치하지만 2 인덱스 값이 다르므로 카운팅이 안된다

    // 이진 탐색하는 함수 만들기
    const binarySearch = (target) => {
        let left = 0
        let right = nums2.length - 1

        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            const num = nums2[mid][0]

            if (target > num) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return nums2[right][1]
    }

    let result = 0

    // 시간초과
    // 좀더 창의적으로 x,z 만 찾고 인덱스의 차이만큼 개수 카운트가 안되지
    // y2 값을 num1 에 일일이 찾아봐야함 있나없나
    // 걍 세그먼트, 펜윅트리 모르는 범부라 풀수 없음 제한시간내에

    // 기준을 y로 하고 y앞 arr 과 y 뒤 arr 을 만들고
    // y 앞의 x 값을 기준으로 arr 앞을 탐색해서 존재하는지 x 값 증가시켜서 또 존재하는지 이거 기억해서 y값 증가했을때 함 더써먹으면 됨.
    for (let i = 0; i < nums1.length; i++) {
        const x1 = i
        const x2 = binarySearch(nums1[i])


        for (let j = nums1.length - 1; j > i + 1; j--) {
            const z1 = j
            const z2 = binarySearch(nums1[j])

            if (x2 + 1 < z2) {
                const count = Math.min(z2 - x2 - 1, z1 - x1 - 1)
                console.log(count, x1, z1)
                result += count
            }

        }
    }

    return result
};

console.log(goodTriplets(nums1, nums2));