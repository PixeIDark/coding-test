// 연속 실행 가능한 로봇 수 k. Math.max(...chargeTimes.slice(0, k - 1)) + k * runningCosts.slice(0, k-1).reduce(a, b => a + b) <= budget
// 을 충족하는 최대 k 를 반환

const chargeTimes = [74, 46, 19, 34, 7, 87, 7, 40, 28, 81, 53, 39, 3, 46, 21, 40, 76, 44, 88, 93, 44, 50, 22, 59, 46, 60, 36, 24, 50, 40, 56, 5, 39, 9, 24, 74, 7, 14, 95, 45, 36, 17, 22, 12, 53, 41, 2, 33, 100, 73, 20, 70, 81, 91, 28, 98, 47, 88, 79, 100, 78, 38, 44, 74, 48, 76, 73, 92, 28, 30, 95, 87],
    runningCosts = [11, 33, 15, 40, 8, 28, 97, 89, 51, 42, 17, 57, 45, 5, 63, 53, 23, 43, 76, 64, 86, 86, 89, 53, 94, 91, 78, 12, 90, 29, 79, 48, 35, 6, 88, 79, 82, 76, 44, 93, 83, 55, 65, 96, 86, 24, 54, 65, 94, 4, 26, 73, 51, 85, 47, 99, 17, 14, 76, 2, 39, 52, 58, 5, 15, 35, 79, 16, 94, 16, 59, 50],
    budget = 447
// Output: 3
// Explanation:
//     It is possible to run all individual and consecutive pairs of robots within budget.
//     To obtain answer 3, consider the first 3 robots. The total cost will be max(3,6,1) + 3 * sum(2,1,3) = 6 + 3 * 6 = 24 which is less than 25.
// It can be shown that it is not possible to run more than 3 consecutive robots within budget, so we return 3.

// 슬라이딩 윈도우. 실패시에 종료가 아니라 left 값을 1 증가 시켜서 쭉 이어가야함
// 윈도우에서 최대 값을 계속 추적해야함 => left right 변수에 따라 유동적으로 판별하는 dequeue 필요
// 누적값은 left right 값에 맞춰서 더하고 빼면됨
// k 는 right - left + 1
// 70분
var maximumRobots = function (chargeTimes, runningCosts, budget) {
    const n = chargeTimes.length
    const dequeue = []
    let maxLength = 0
    let sum = 0
    let cost = 0
    let left = 0

    for (let right = 0; right < n; right++) {
        while (dequeue.length && chargeTimes[dequeue[dequeue.length - 1]] <= chargeTimes[right]) dequeue.pop()

        while (cost > budget && left <= right) {
            sum -= runningCosts[left++]

            if (dequeue.length && dequeue[0] < left) dequeue.shift()

            cost = chargeTimes[dequeue[0]] + (right - left + 1) * sum
        }

        dequeue.push(right)
        sum += runningCosts[right]

        if (right >= left) cost = chargeTimes[dequeue[0]] + (right - left + 1) * sum

        if (cost <= budget) maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
};

console.log(maximumRobots(chargeTimes, runningCosts, budget))