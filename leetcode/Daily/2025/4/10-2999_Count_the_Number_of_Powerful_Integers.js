// start ~ finish 까지 s 가 포함된 숫자가 몇개 들어갈 수 있는지. 모든 자릿수의 숫자는 limit 을 초과하면 안됨

const start = 1, finish = 6000000, limit = 4, s = "124"
// Output: 5
// Explanation: The powerful integers in the range [1..6000] are 124, 1124, 2124, 3124, and, 4124. All these integers have each digit <= 4, and "124" as a suffix. Note that 5124 is not a powerful integer because the first digit is 5 which is greater than 4.
// It can be shown that there are only 5 powerful integers in this range.

// s 는 각 자릿수가 limit 이하로 제공됨. 또한 0은 존재하지 않음
// s 앞과 뒤에 숫자를 어느 만큼 넣을수 있는지 계산이다
// 1234444 4444 말고 올 수 있는 얘는 몇개인가? 4에 4승 16
// 4123444
// 4412344
// 4441234
// 4444123
// 빈틈이 3개면 4개의 경우
// 빈틈이 4개면 5개의 경우
// 빈틈이 0개면? 1개의 경우 123
// 즉, 빈틈이 5개면 빈틈 0,1,2,3,4,5 개일 때의 경우의 수를 각각 범위만큼 계산 하고 서로 다 더한값임
// start 가 s 보다 크거나 finish 가 s 보다 작으면 0 출력
// TODO: 벽
var numberOfPowerfulInt = function (start, finish, limit, s) {
    if (start > Number(s) || finish < Number(s)) return 0

    // 1. limit 와 s 를 결합해서 만들수 있는 최소 값과 최대 값을 정의
    // s 첫 인덱스를 비교해봐야해 finish 첫째 자리보다 큰지 작은지
    // s 가 크면 뒷자리 하나 못쓰는거임
    // s 가 작으면 이번엔 limit 이랑 finish 비교 만약 limit 이 작으면 자유로움. 크면 경우의 수가 바뀜

    // 도저히 로직을 못짜겠어.. 걍 포스로 가자
    const dp = Array(finish).fill(0)
    let rule = String(finish)

    if(finish[0] >= limit) rule[0] = limit
    else rule[rule.length-1] = ""

    for(let i = start; i < Number(rule); i++) {
        // limit 못 넘게 조절해야함
        if(i)
    }

};