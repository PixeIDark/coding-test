// 인덱스 0과 n - 1 은 항상 1, 사이의 값은 이전 배열의 인접 요소들의 합
// dp 형식으로 이전 배열 값을 꾸준히 참조해야함
// 9분
var generate = function (numRows) {
    const stack = [[1]];

    for (let i = 0; i < numRows - 1; i++) {
        const arr = [1];

        for (let j = 0; j < stack[i].length - 1; j++) {
            const num = stack[i][j] + stack[i][j + 1];
            arr.push(num);
        }


        arr.push(1);
        stack.push(arr);
    }


    return stack;
};