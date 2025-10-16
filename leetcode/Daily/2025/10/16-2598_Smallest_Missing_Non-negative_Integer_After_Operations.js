// 가장 작은 음이 아닌 정수 찾기
// 정수는 0부터 증가한다 가정하고 증가중에 누락된 정수를 최대치로 만들고 반환
// value 5
// 1 + 5 + 5 + 5 => x % 5 === 1 인 모든 정수가 가능
// -10 + 5 + 5 + 5 + 5 => x % 5 === 0 인 모든 정수가 가능함
// 7 + 5 + 5 + 5 + 5 =>  x % 5 === 2 인 모든 정수가 가능함
// 즉 0부터 평가를 시작하는 정수 k에 대해 , set.has(k % value) 로 탐색 존재하면 컨티뉴 아니면 즉시 리턴
// 30분
var findSmallestInteger = function (nums, value) {
    const remainders = new Map()

    for (const num of nums) {
        // 음수일경우 -3 => 1 => 5 일케 가능해서 다르게 처리해줘야하
        // -3 => 3 => 7 이게 아님
        // 음수 뜨면 걍 value 계속 더해주는 방식??
        // num % value + value
        const k = (num % value + value) % value

        remainders.set(k, (remainders.get(k) ?? 0) + 1)
    }

    // 한번 쓰고나면 지워져야해 즉 set이 아닌 map으로 해야함
    for (let i = 0; i <= nums.length; i++) {
        const k = i % value

        if ((remainders.get(k) ?? 0) < 1) return i
        else remainders.set(k, (remainders.get(k) - 1))
    }

    return nums.length
};