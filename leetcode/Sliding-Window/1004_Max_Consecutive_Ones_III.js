// 0 을 1로 k 만큼 바꿀수 있을 때, 1로만 이루어진 최대 길

const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 3
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// 0 을 1로 바꾸면서 전진해야함.
// K 가 모두 소모 되었는데, 0 이 등장하면 최대 값 저장하고 1이 있는 곳 부터 다시 시작
// 순회했는데 k 가 남을 시 남는 k 만큼 최대 값에 추가
// 48분 걍 바보같이 품
var longestOnes = function (nums, k) {
    // 1이 있는 배열을 모두 그룹으로 나눔
    // k 를 소모해서 그룹끼리 연결, K 가 모두 소모되면 끝
    // 그렇지 않으면 다음 그룹에서 재시작
    // 항상 남은 k를 마지막에 합산해줌
    let start = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            start = i
            break
        }
    }

    let end = 0

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 1) {
            end = i
            break
        }
    }


    const arr = []
    let one = 0
    let zero = 0

    for (let i = start; i <= end; i++) {
        const num = nums[i]

        if (num === 1) {
            one++
            if (zero) {
                arr.push(zero)
                zero = 0
            }
        } else if (num === 0) {
            zero++
            if (one) {
                arr.push(one)
                one = 0
            }
        }
    }

    arr.push(one)

    const graph = []

    for (let i = 0; i < arr.length; i += 2) {
        graph.push([arr[i], arr[i + 1] ?? 0])
    }


    let max = 0

    for (let i = 0; i < graph.length; i++) {
        let chance = k
        let sum = 0

        for (let j = i; j < graph.length; j++) {
            const [count, cost] = graph[j]
            sum += count

            if (cost > chance) break

            chance -= cost
            sum += cost
        }

        max = Math.max(max, sum + chance)
    }

    return Math.min(max, nums.length)
}

console.log(longestOnes(nums, k));