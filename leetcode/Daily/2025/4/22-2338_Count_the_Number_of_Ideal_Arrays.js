// maxValue 까지 몇개의 배열이 될수 있는지 출력 n 은 배열의 길이

const n = 5, maxValue = 9
// Output: 11
// Explanation: The following are the possible ideal arrays:
//     - Arrays starting with the value 1 (9 arrays):
// - With no other distinct values (1 array): [1,1,1,1,1]
// - With 2nd distinct value 2 (4 arrays): [1,1,1,1,2], [1,1,1,2,2], [1,1,2,2,2], [1,2,2,2,2]
// - With 2nd distinct value 3 (4 arrays): [1,1,1,1,3], [1,1,1,3,3], [1,1,3,3,3], [1,3,3,3,3]
// - Arrays starting with the value 2 (1 array): [2,2,2,2,2]
// - Arrays starting with the value 3 (1 array): [3,3,3,3,3]
// There are a total of 9 + 1 + 1 = 11 distinct ideal arrays.

// 요소값을 i 번 더해서 maxValue 보다 작은 수치만큼 (n-1) * i 결과에 추가
// TODO: 벽
var idealArrays = function (n, maxValue) {
    let result = maxValue

    for (let i = 1; i <= maxValue; i++) {
        // i 에 i 를 몇번 더해야 maxValue 가 될수 있을까?
        // maxValue 를 i 로 나눈 값의 내림차
        // 요소 커졋을때도 또 계산해야함 이걸 계속 반복해야해


        for (let j = i; j <= maxValue; j += j) {
            const quotient = Math.floor(maxValue / j) - 1
            result += quotient * (n - 1)

        }
    }
    // 이해는 쉬운데 풀기가 어려운 문제..
    return result
};

console.log(idealArrays(n, maxValue))