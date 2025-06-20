// 원점 (0, 0) 에서 시작 하고 s 의 방향대로 움직일경우 원점에서의 최대거리가 몇인지 출력
// k 횟수만큼 방향을 바꿀수가있음
// 남서, 남동, 북서, 북동 이렇게 처음에 어떤 스탠스인지 검사를 함
// Math.min(k, 반대 스탠스) 횟수를 소모해서 스탠스의 성향을 극대화시킴
// 키 값으로 방향을 저장. 반대 성향의 키의 값을 소모해서 증가 시킬수 있다
// (a, b) 각각 음수든 양수든 절대 값이 커지는 방향으로 가면됨
// 1. s 키 값 저장, 최대 값과 최대 값일 시의 좌표 저장
// 2. 좌표를 토대로 절대 값을 증가시키는 방향으로 반대 키 값과 k 를 모두 소모함
// 3. 증가한만큼 최대 값에 더함
// TODO: 벽..
var maxDistance = function (s, k) {
    s = s.split("")
    const dirCount = {
        N: [],
        S: [],
        E: [],
        W: []
    }
    const dirs = {
        N: [0, 1],
        S: [0, -1],
        E: [1, 0],
        W: [-1, 0]
    }

    let currPosition = [0, 0]

    for (let i = s.length - 1; i >= 0; i--) {
        const dir = s[i]
        dirCount[dir].push(i)
        const [dy, dx] = dirs[dir]

        currPosition[0] += dy
        currPosition[1] += dx
    }

    // 최종 값 기준 많이 나온 녀석으로 맞춰줘야함
    // currPosition 기준 [0] 음수면 dirCount[E] 소모 없으면 넘어감
    // [1] 음수면 dirCount[N] 소모
    // 소모가 원본 s를 변경 시켜야함 그럴려면
    // dirCount에 배열로 인덱스 위치를 저장
    // 우선, 첫 평가시 리버스로 s를 순회해서 push 그 후 인덱스 위치 꺼낼 때 도 pop

    console.log(dirCount)

    for (let i = 0; i < k; i++) {
        const [x, y] = currPosition

        if (x < 0 && dirCount["E"].length) {
            const index = dirCount["E"].pop()
            s[index] = "W"
        } else if (x >= 0 && dirCount["W"].length) {
            const index = dirCount["W"].pop()
            s[index] = "E"
        } else if (y < 0 && dirCount["N"].length) {
            const index = dirCount["N"].pop()
            s[index] = "S"
        } else if (y >= 0 && dirCount["S"].length) {
            const index = dirCount["S"].pop()
            s[index] = "N"
        } else break
    }

    currPosition = [0, 0]
    let maxDis = 0

    for (const dir of s) {
        const [dy, dx] = dirs[dir]

        currPosition[0] += dy
        currPosition[1] += dx
        const dis = Math.abs(currPosition[0]) + Math.abs(currPosition[1])
        maxDis = Math.max(maxDis, dis)
    }

    return maxDis
};