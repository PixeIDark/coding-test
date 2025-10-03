// 가장자리의 높이들을 우선순위([height, y, x]) 최소힙에 넣어
// 반복문에서 힙의 요소를 꺼내서 네방향을 탐색
// 방향 탐색중 더 낮은 얘 만나면 높이 더하고, 원본과 해당방향 비교해서 높은쪽 힙에 넣음 (좌표는 그대로)
// 모든 과정중 항상 방문기록해야함
// 가장자리중 가장 높이가 낮은곳부터 탐색하게되고, 그 주변에 가장자리가아닌 더 낮은 높이가 있다면 걔높이 찾고 즉각 더함
// 63분
class MinHeaps {
    constructor() {
        this.heap = []
    }

    add(item) {
        this.heap.push(item)
        this.siftUp(this.heap.length - 1)
    }

    get() {
        const temp = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        this.siftDown(0)

        return temp
    }

    size() {
        return this.heap.length
    }

    siftUp(index) {
        while (index) {
            const parent = Math.floor((index - 1) / 2)

            if (this.heap[index][0] < this.heap[parent][0]) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
            }

            index = parent
        }
    }

    siftDown(index) {
        while (true) {
            const left = index * 2 + 1
            const right = index * 2 + 2
            let small = index

            if (left < this.heap.length && this.heap[small][0] > this.heap[left][0]) {
                small = left
            }

            if (right < this.heap.length && this.heap[small][0] > this.heap[right][0]) {
                small = right
            }

            if (small === index) break

            [this.heap[small], this.heap[index]] = [this.heap[index], this.heap[small]]
            index = small
        }
    }
}

var trapRainWater = function (heightMap) {
    const n = heightMap.length
    const m = heightMap[0].length
    const vis = Array.from({length: n}, () => Array(m).fill(false))
    const heap = new MinHeaps()

    for (let y = 0; y < n; y++) {
        heap.add([heightMap[y][0], y, 0])
        heap.add([heightMap[y][m - 1], y, m - 1])
        vis[y][0] = vis[y][m - 1] = true
    }

    for (let x = 1; x < m - 1; x++) {
        heap.add([heightMap[0][x], 0, x])
        heap.add([heightMap[n - 1][x], n - 1, x])
        vis[0][x] = vis[n - 1][x] = true
    }

    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let total = 0

    while (heap.size()) {
        const [height, y, x] = heap.get()

        for (const [dy, dx] of dirs) {
            const ny = dy + y
            const nx = dx + x

            if (ny < 0 || nx < 0 || ny >= n || nx >= m || vis[ny][nx]) continue

            total += Math.max(0, height - heightMap[ny][nx])
            heap.add([Math.max(height, heightMap[ny][nx]), ny, nx])
            vis[ny][nx] = true
        }
    }

    return total
};