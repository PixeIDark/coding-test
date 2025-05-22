// 배열의 모든 요소를 0으로 만들고 남는 쿼리의 개수 0만들기 실패시 -1

const nums = [1, 2, 3, 4], queries = [[0, 3]]
// Output: 1
// Explanation:
//     After removing queries[2], nums can still be converted to a zero array.
//     Using queries[0], decrement nums[0] and nums[2] by 1 and nums[1] by 0.
//     Using queries[1], decrement nums[0] and nums[2] by 1 and nums[1] by 0.

// 존나 어려운 문제다 신중하게 설계하자
// nums 의 요소 하나하나 0 으로 만들수 있는 쿼리를 찾아내야함
// 요소의 인덱스보다 query 의 [1] 이 크거나 같다면 감소 가능함 => 쿼리를 [1]내림차순으로 본래 인덱스와 함께 정렬, 요소 인덱스 끝부터 반복문 돌린다.(쿼리 정렬시 [1]이 같다면 본래 인덱스가 낮은 얘를 우선순위 해주면 좋음)
// 문제는 쿼리를 찾아 감소를 시켰을 때 영향받는 다른 요소들을 어떻게 해줄지임 => 선택 요소가 0 될때까지 쿼리 돌리고 프리픽스 함수를 만들어서 영향받는 요소들에 적용. 프리픽스는 쿼리의 본래 인덱스까지의 범위에 속한 쿼리까지 적용해줌
// 다시, nums 끝에서부터 반복문 계속 진행해서 0이 아닌 얘들을 찾아서 수행함 와중, 요소가 0이 아닌데 적절한 쿼리를 찾지못하면 바로 -1 반환
// TODO: 벽, 쿼리 원본인덱스 처리 어케 해야하는지 도저히 모르겠어
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    size() {
        return this.heap.length;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex][1] >= this.heap[index][1]) break;

            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            let maxIndex = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;

            if (leftChild < this.heap.length &&
                this.heap[leftChild][1] > this.heap[maxIndex][1]) {
                maxIndex = leftChild;
            }

            if (rightChild < this.heap.length &&
                this.heap[rightChild][1] > this.heap[maxIndex][1]) {
                maxIndex = rightChild;
            }

            if (maxIndex === index) break;

            [this.heap[index], this.heap[maxIndex]] = [this.heap[maxIndex], this.heap[index]];
            index = maxIndex;
        }
    }
}

var maxRemoval = function (nums, queries) {
    const canQuery = (maxUsableQueries) => {
        const copyNums = nums.slice()
        const usedQueries = new Set()
        let usedCount = 0;

        for (let i = 0; i < copyNums.length; i++) {
            const num = Math.max(0, copyNums[i]);
            if (num === 0) continue;

            const maxHeap = new MaxHeap();

            for (let k = 0; k < queries.length; k++) {
                const [start, end] = queries[k];
                if (start <= i && i <= end && !usedQueries.has(k)) {
                    maxHeap.push([start, end, k]);
                }
            }

            if (maxHeap.size() < num) return false;
            if (usedCount + num > maxUsableQueries) return false;

            const arr = Array(nums.length + 1).fill(0)

            for (let j = 0; j < num; j++) {
                const [start, end, idx] = maxHeap.pop()
                usedQueries.add(idx)
                usedCount++

                arr[start]++
                arr[end + 1]--
            }

            copyNums[0] -= arr[0]
            for (let k = 1; k < arr.length - 1; k++) {
                arr[k] += arr[k - 1]
                copyNums[k] -= arr[k]
            }
        }

        return true;
    }

    if (!canQuery(queries.length)) {
        return -1;
    }

    let left = 0
    let right = queries.length

    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        if (canQuery(mid)) right = mid
        else left = mid + 1
    }

    return queries.length - left;
};


console.log(maxRemoval(nums, queries))