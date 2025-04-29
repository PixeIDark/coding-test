/**
 * 버블 정렬 구현
 * 시간 복잡도: O(n²)
 */
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 두 요소 교환
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    return arr;
}

/**
 * 선택 정렬 구현
 * 시간 복잡도: O(n²)
 */
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}

/**
 * 삽입 정렬 구현
 * 시간 복잡도: O(n²), 거의 정렬된 배열에선 O(n)에 가까움
 */
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

/**
 * 퀵 정렬 구현
 * 시간 복잡도: 평균 O(n log n), 최악 O(n²)
 */
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const middle = [];
    const right = [];

    for (const element of arr) {
        if (element < pivot) left.push(element);
        else if (element > pivot) right.push(element);
        else middle.push(element);
    }

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

/**
 * 병합 정렬 구현
 * 시간 복잡도: O(n log n)
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * 카운팅 정렬 구현 (양수 정수 배열용)
 * 시간 복잡도: O(n + k), k는 배열의 최대값
 */
function countingSort(arr) {
    if (arr.length <= 1) return arr;

    // 최대값 찾기
    const max = Math.max(...arr);

    // 카운트 배열 초기화
    const count = new Array(max + 1).fill(0);

    // 각 요소 개수 세기
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // 누적 합계 계산
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // 정렬된 결과 배열
    const output = new Array(arr.length);

    // 뒤에서부터 순회하여 안정적 정렬
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}

/**
 * 기수 정렬 구현 (양수 정수 배열용)
 * 시간 복잡도: O(n * d), d는 가장 큰 요소의 자릿수
 */
function radixSort(arr) {
    if (arr.length <= 1) return arr;

    // 최대값 찾기
    const max = Math.max(...arr);

    // 최대값의 자릿수 구하기
    const maxDigits = Math.floor(Math.log10(max)) + 1;

    // 자릿수별로 버킷 정렬 수행
    let divisor = 1;
    for (let digitPlace = 0; digitPlace < maxDigits; digitPlace++) {
        // 각 자릿수에 대해 카운팅 정렬 수행
        const count = new Array(10).fill(0);

        // 현재 자릿수 기준으로 개수 세기
        for (let i = 0; i < arr.length; i++) {
            const digit = Math.floor(arr[i] / divisor) % 10;
            count[digit]++;
        }

        // 누적 합계 계산
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        // 정렬된 결과 배열
        const output = new Array(arr.length);

        // 뒤에서부터 순회하여 안정적 정렬
        for (let i = arr.length - 1; i >= 0; i--) {
            const digit = Math.floor(arr[i] / divisor) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }

        // 원본 배열 업데이트
        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }

        // 다음 자릿수로 이동
        divisor *= 10;
    }

    return arr;
}

// 간단한 테스트
const array = [34, 7, 23, 32, 5, 62, 1, 54, 13, 59];
console.log('원본 배열:', array);
console.log('버블 정렬:', bubbleSort([...array]));
console.log('선택 정렬:', selectionSort([...array]));
console.log('삽입 정렬:', insertionSort([...array]));
console.log('퀵 정렬:', quickSort([...array]));
console.log('병합 정렬:', mergeSort([...array]));
console.log('카운팅 정렬:', countingSort([...array]));
console.log('기수 정렬:', radixSort([...array]));