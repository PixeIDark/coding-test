// 0을 포함하는 짝수 인덱스는 짝수, 홀수 인덱스는 소수면 좋은 숫자임. 좋은 숫자 개수 출력

const n = 50
// Output: 5
// Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".

// n
var countGoodNumbers = function (n) {
    const MOD = BigInt(1e9 + 7)
    // 홀수 2,3,5,7 4개
    // 짝수 0,2,4,6,8 5개

    // n = 1 짝수, 5개
    // n = 2 짝수 * 홀수 = 20개
    // n = 3 짝 * 홀 * 짝 = 100개
    // n = 4 짝 * 홀 * 짝 * 홀 = 400개
    // n 이 홀수 이면 짝수가 추가 짝수면 홀수가 추가됨
    const even = 5n
    const odd = 4n
    // for (let i = 1; i <= n; i++) {
    //     if (i % 2) result = (result * even) % MOD
    //     else result = (result * odd) % MOD
    // }
    // 시간초과.. ㅇㄴㅁㅍㄴ
    // 짝수끼리 곱한 값 * 홀수끼리 곱한 값 = result

    const evenCount = (BigInt(n) / 2n) + (BigInt(n) % 2n)
    const oddCount = BigInt(n) / 2n

    // result = Math.pow(even, evenCount) * Math.pow(odd, oddCount)
    // 근데 모듈화 해줘야함 어케?? Math에 의존하지말고 내가 직접 만들어야함 제곱할떄마다 모듈화해주는 함수를

    const darkPow = (num, count) => {
        if (count === 0n) return 1n
        let result = 1n
        num = num % MOD

        while (0n < count) {
            if (count === 0n) return 1n;

            if (count % 2n === 1n) result = (result * num) % MOD

            count /= 2n;
            num = (num * num) % MOD
        }

        return result
    }

    const result = (darkPow(even, evenCount) * darkPow(odd, oddCount)) % MOD

    return Number(result)
};


console.log(countGoodNumbers(n));

