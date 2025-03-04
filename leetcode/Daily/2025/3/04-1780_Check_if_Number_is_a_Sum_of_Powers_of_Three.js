// 3의 거듭제곱들 제곱으로 되나안되나

const n = 100
// Output: true
// Explanation: 91 = 30 + 32 + 34

// 중복은 안될거다 아마
// n 을 3으 로나눔 나머지가 1이거나 0 이면 트루
// 31 은 1 32 는 3 33은 9 34는 27 3씩 늘어
// 2 쓰레기
var checkPowersOfThree = function (n) {
    do {
        const a = n % 3
        if (a === 2) return false

        n = Math.floor(n / 3)
    } while (n)

    return true
};

console.log(checkPowersOfThree(n))