// 작업 몇번 할수 있는지 출력

const tasks = [5, 9, 8, 5, 9], workers = [1, 6, 4, 2, 6], pills = 1, strength = 5
// Output: 3
// Explanation:
//     We can assign the magical pill and tasks as follows:
//     - Give the magical pill to worker 0.
// - Assign worker 0 to task 2 (0 + 1 >= 1)
// - Assign worker 1 to task 1 (3 >= 2)
// - Assign worker 2 to task 0 (3 >= 3)

// tasks 를 정렬한다
// tasks 의 가장 높은 요소부터 이진 탐색으로 workers 에서 근사 값을 찾는다(최대한 커야함)
// 만약 tasks > workers 일 경우, strength 보정 시 tasks <= workers 가 되면 pills 를 하나 소모
// ...반복
// TODO: 벽, 4.5level
const binarySearch = (arr, target) => {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        if (arr[mid] <= target) left = mid + 1
        else right = mid
    }

    if (left - 1 !== -1) {
        [arr[left - 1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[left - 1]]
        arr.pop()
        arr.sort((a, b) => a - b)
    }

    return left - 1
}

var maxTaskAssign = function (tasks, workers, pills, strength) {
    tasks.sort((a, b) => a - b)
    tasks.push(Infinity)
    workers.sort((a, b) => a - b)
    console.log({tasks}, {workers})

    // 조건에 없으면 -1 이뜸 worker < task
    // 함수에서 무한 푸시하는 것도 생각해야함
    // 출력이 같은 요소면 가장 우측인 것부터 됨
    let result = 0

    for (const worker of workers) {
        // 1작업자 => 1 작업 만 가능함
        // 즉 찾아내면 작업을 삭제해줘야함
        // monotonic queue 로 정리해줘야함
        if (binarySearch(tasks, worker) !== -1) {
            console.log("f")
            result++
            continue
        }

        if (pills && binarySearch(tasks, worker + strength) !== -1) {
            result++
            pills--
        }
    }

    return result
}

console.log(maxTaskAssign(tasks, workers, pills, strength));