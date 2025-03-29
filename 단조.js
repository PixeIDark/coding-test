const monotonicIncreasing = (arr) => {
    const stack = []

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && stack[stack.length - 1] > arr[i]) {
            stack.pop()
        }
        stack.push(arr[i])
    }

    return stack
}

const monotonicDecreasing = (arr) => {
    const stack = []

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && stack[stack.length - 1] < arr[i]) {
            stack.pop()
        }
        stack.push(arr[i])
    }

    return stack
}

const arr = [1, 3, 5, 3, 4]

console.log(monotonicIncreasing(arr))
console.log(monotonicDecreasing(arr))