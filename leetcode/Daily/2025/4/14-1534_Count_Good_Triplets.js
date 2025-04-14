// 삼중항 개수

const arr = [1, 1, 2, 2, 3], a = 0, b = 0, c = 1
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

// i 기준으로 j 랑 바교해서 됐어 그럼이제 j 랑 k 를 비교하는데 됌 마지막으로 i랑 k 비교했는데 안됌
// 그럼 j 는 다음에 i 가되는데 i 와 j 과정은 프리패스임
// 포스말고 생각이 안남
var countGoodTriplets = function (arr, a, b, c) {
    let result = 0

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) > a) continue

            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[i] - arr[k]) <= c && Math.abs(arr[j] - arr[k]) <= b) result++

            }
        }
    }

    return result
};

console.log(countGoodTriplets(arr, a, b, c));