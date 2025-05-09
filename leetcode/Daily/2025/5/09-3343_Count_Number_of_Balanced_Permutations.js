// 문자열의 모든 순열 중 모든 홀수자리와 모든 짝수 자리의 합이 같은 균형 문자열의 개수 출력

const num = "123"

// Output: 2
// Explanation:
//     The distinct permutations of num are "123", "132", "213", "231", "312" and "321".
//     Among them, "132" and "231" are balanced. Thus, the answer is 2.

// dp 문제.
// [1, 2, 3, 4, 5, 6] === [1, 4, 3, 2, 5, 6]
// 같은 홀수 짝수 끼리는 위치 바뀌어도 정답은 같아
// 변수는 짝수와 홀수 끼리 숫자 교환이야
// 그렇다면 짝수영역의 set 과 홀수영역의 set 두 그룹으로 두고 각각 교환하면서 되는놈을 파악한다 => dp 로는 어케 푸는지 모름
// 만약 그 그룹이 균형이면 result += n * (n - 1) / 2 . 순열이 고유하므로 하기전에 set 으로 정리
// dp 의 크기는 n = 40 m = 40 홀수 그룹 하나를 기준으로 놓고 인덱스 요소가 바뀔때마다 total 값에서 +- 해주고 기록
// TODO: 벽, top-down 2dp, 조합론, 메모이제이션, dfs
var countBalancedPermutations = function (num) {
    let result = 0
    const MOD = 1e9 + 7

};

// 순열은 중복없이 고유함
// 1. dfs 로 num 로 가능한 모든 순열을 뽑아냄
// 순열을 만들면서 인덱스의 위치로 홀수 짝수를 판별하고 매개변수로 더 해줘
// 순열을 완성하면 홀수, 짝수 매개변수 값을 비교해서 균형 문자열인지 판별하고 카운트
// 단, 고유하니까 set 에 넣으면서 중복 유무를 파악해야해. 즉 set.has(str) === false 일시, 카운트 하는거임
// 2. 모든 순열을 포문 돌면서 계산함
// var countBalancedPermutations = function (num) {
//     let result = 0
//     const MOD = 1e9 + 7
//     const globalVis = new Set()
//
//     // dfs 전에 미리 포문 돌리면 total 매개변수 필요없음
//     // odd 를 order 이라는 매개변수 이용해서 순서를 만들어줘야해
//     const dfs = (str, odd, total, vis) => {
//         if (str.length === num.length) {
//             // MOD 이용해서 늘 result 값 검증
//             if (odd * 2 === total && !globalVis.has(str)) result = (result + 1) % MOD
//             globalVis.add(str)
//             return
//         }
//
//         for (let i = 0; i < num.length; i++) {
//             if (vis.has(i)) continue
//
//             const sum = Number(num[i])
//             const newStr = str + num[i]
//             const newOdd = (newStr.length - 1) % 2 === 1 ? odd + sum : odd
//             const newTotal = total + sum
//             const newVis = new Set([...vis, i])
//             // console.log(newVis)
//             dfs(newStr, newOdd, newTotal, newVis)
//         }
//
//
//     }
//
//     for (let i = 0; i < num.length; i++) {
//         const sum = Number(num[i])
//         dfs(num[i], 0, sum, new Set([i]))
//     }
//
//     return result
// };

console.log(countBalancedPermutations(num))