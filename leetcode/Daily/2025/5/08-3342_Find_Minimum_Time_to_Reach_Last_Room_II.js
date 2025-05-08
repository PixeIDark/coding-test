// 최소 시간. 1, 2 초가 걸림

const moveTime = [[0, 4], [4, 4]]
// Output: 7
// Explanation:
//     The minimum time required is 7 seconds.
//     At time t == 4, move from room (0, 0) to room (1, 0) in one second.
//     At time t == 5, move from room (1, 0) to room (1, 1) in two seconds.

// pq 에 다음에 걸릴 초도 넣어서 [y, x, value, next]
// 시간 초과. pq 제대로 구현하자..
// 어느 인덱스든 정렬가능하게 범용적으로 만들어보자.
class MinHeap {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length
    }

    add(item, standard = 2) {
        this.heap.push(item)
        this.siftUp(this.heap.length - 1, standard)
    }

    shift(standard = 2) {
        // if (this.heap.length < 3) return this.heap.shift()

        const temp = this.heap[0]

        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        this.siftDown(0, standard)

        return temp
    }

    // 추가 되는 요소의 순서를 끌어 올리면서 정렬 시킴
    siftUp(index, standard) {

        while (index) {
            const parent = Math.floor((index - 1) / 2)

            if (this.heap[parent][standard] > this.heap[index][standard]) {
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            }

            index = parent
        }
    }

    // 요소가 추출되면 순서를 내리면서 정렬 시킴
    siftDown(index, standard) {

        while (true) {
            let small = index
            const left = index * 2 + 1
            const right = index * 2 + 2

            if (this.heap[left] && this.heap[small][standard] > this.heap[left][standard]) small = left

            if (this.heap[right] && this.heap[small][standard] > this.heap[right][standard]) small = right

            if (small === index) break

            [this.heap[small], this.heap[index]] = [this.heap[index], this.heap[small]]
            index = small
        }
    }
}

var minTimeToReach = function (moveTime) {
    const n = moveTime.length
    const m = moveTime[0].length
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const times = Array.from({length: n}, () => Array(m).fill(Infinity))
    const pq = new MinHeap()
    pq.add([0, 0, 0, 1], 2)
    times[0][0] = 0

    while (pq.size()) {
        const [y, x, time, value] = pq.shift(2)

        if (y === n - 1 && x === m - 1) return time

        if (time > times[y][x]) continue

        for (const [dy, dx] of dir) {
            const ny = dy + y
            const nx = dx + x

            if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue

            const nextTime = Math.max(moveTime[ny][nx], time) + value
            const nextValue = value === 1 ? 2 : 1

            if (nextTime < times[ny][nx]) {
                times[ny][nx] = nextTime
                pq.add([ny, nx, nextTime, nextValue], 2)
            }
        }
    }

    return "failed"
};

console.log(minTimeToReach(moveTime))