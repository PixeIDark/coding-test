//  모든 비트 1로 만들어버리기

const nums = [0, 1, 1, 1, 0, 0]
// Output: 3
// Explanation:
//     We can do the following operations:
//     Choose the elements at indices 0, 1 and 2. The resulting array is nums = [1,0,0,1,0,0].
//     Choose the elements at indices 1, 2 and 3. The resulting array is nums = [1,1,1,0,0,0].
//     Choose the elements at indices 3, 4 and 5. The resultingzing array is nums = [1,1,1,1,1,1].

var minOperations = function (nums) {
    const n = nums.length;
    const arr = [...nums];
    let result = 0;

    for (let i = 0; i < n - 2; i++) {
        if (arr[i] === 0) {
            arr[i] ^= 1;
            arr[i + 1] ^= 1;
            arr[i + 2] ^= 1;
            result++;
        }
    }

    if (arr[n - 2] === 1 && arr[n - 1] === 1) {
        return result;
    } else {
        return -1;
    }
};