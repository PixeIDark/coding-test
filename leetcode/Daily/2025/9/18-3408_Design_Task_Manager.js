class MaxHeaps {
    constructor() {
        this.heap = [];
    }

    add(taskId, priority) {
        this.heap.push([taskId, priority]);
        this.siftUp(this.heap.length - 1);
    }

    delete(taskId) {
        let index = -1;
        for (let i = 0; i < this.heap.length; i++) {
            if (this.heap[i][0] === taskId) {
                index = i;
                break;
            }
        }

        if (index === -1) return;

        this.heap[index] = this.heap[this.heap.length - 1];
        this.heap.pop();

        if (index < this.heap.length) {
            this.siftUp(index);
            this.siftDown(index);
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return max;
    }

    siftUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.compare(this.heap[index], this.heap[parentIndex]) <= 0) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    siftDown(index) {
        while (true) {
            let largest = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;

            if (leftChild < this.heap.length && this.compare(this.heap[leftChild], this.heap[largest]) > 0) {
                largest = leftChild;
            }

            if (rightChild < this.heap.length && this.compare(this.heap[rightChild], this.heap[largest]) > 0) {
                largest = rightChild;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }

    compare(a, b) {
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[0] - b[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

// task = [userId, taskId, priority]
// taskId를 조회해서 priority를 알아낼 수 있어야함
// arr = [[taskId, priority]]
// taskId를 조회해서 userId를 바로 알아낼 수 있어야함
// obj = {taskId: userId}
// 32분
var TaskManager = function (tasks) {
    this.heap = new MaxHeaps()
    this.map = new Map();

    for (const [userId, taskId, priority] of tasks) {
        this.heap.add(taskId, priority);
        this.map.set(taskId, userId);
    }
};

TaskManager.prototype.add = function (userId, taskId, priority) {
    this.heap.add(taskId, priority);
    this.map.set(taskId, userId);
};

TaskManager.prototype.edit = function (taskId, newPriority) {
    this.heap.delete(taskId);
    this.heap.add(taskId, newPriority);
};

TaskManager.prototype.rmv = function (taskId) {
    this.heap.delete(taskId);
    this.map.delete(taskId);
};

TaskManager.prototype.execTop = function () {
    if (this.heap.isEmpty()) return -1;

    const [taskId, priority] = this.heap.extractMax();
    const userId = this.map.get(taskId);
    this.map.delete(taskId);

    return userId;
};