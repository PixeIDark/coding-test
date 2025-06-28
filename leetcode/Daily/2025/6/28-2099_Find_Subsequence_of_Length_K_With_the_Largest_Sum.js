// 내림차순 [요소값, 원본인덱스] 로 정렬
// 최소힙.. 진짜 귀찮다 만들기
// 요소가 가장 높은 k 개의 요소를 힙에 [요소값, 인덱스] 넣고, 인덱스순으로 정렬
// 길이가 k 가 되면 정제해서 요소값만 반환
// 24분
class MinHeap {
    constructor() {
        this.heap = []
    }

    add(x) {
        this.heap.push(x)
        this.siftUp(this.heap.length - 1)
    }

    remove() {
        const temp = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.siftDown(0)

        return temp
    }

    siftUp(index) {
        while (index) {
            const parent = Math.floor((index - 1) / 2)

            if (this.heap[index][1] > this.heap[parent][1]) break

            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
            index = parent
        }
    }

    siftDown(index) {
        while (true) {
            const left = index * 2 + 1
            const right = index * 2 + 2
            let small = index

            if (left < this.heap.length && this.heap[left][1] < this.heap[small][1]) small = left

            if (right < this.heap.length && this.heap[right][1] < this.heap[small][1]) small = right

            if (small === index) break
            [this.heap[index], this.heap[small]] = [this.heap[small], this.heap[index]]
            index = small
        }
    }
}

var maxSubsequence = function (nums, k) {
    nums = nums.map((a, b) => [a, b]).sort((a, b) => b[0] - a[0])

    // 힙에 k 개 넣음
    // 힙은 [0] 최소 인것만 보장. 힙에 k 개를 넣고, [0] 부터 제거하면서 재정렬해서 인덱스 판단

    const pq = new MinHeap()

    for (let i = 0; i < k; i++) {
        pq.add(nums[i])
    }

    const result = []
    for (let i = 0; i < k; i++) {
        const num = pq.remove()[0]
        result.push(num)
    }

    // nums.length 범위가 작아서 걍 정렬이 더 빠름..
    return result
};