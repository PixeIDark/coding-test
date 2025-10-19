// 홀수 인덱스 요소에 += a, b 만큼 오른쪽으로 움직임
// s를 여러 형태로 변형했을 때, 사전순으로 가장 앞에 오는 얘
// b가 짝수냐 홀수냐에 따라 법칙이 다름. b % s.length 만큼 회전한다고 보면됨
// 짝수일 시, 값이 바뀔 수 있는 위치는 정해져있음. 짝수 인덱스만 값이 바뀜
// 홀수는 무한의 가능성 어느 위치든 다 가능
// 무차별 대입이 유일해. 회전과 추가 함수를 각기 만들고 매순간 두 함수를 호출해야함
// 33분
var findLexSmallestString = function (s, a, b) {
    const add = (str) => {
        const arr = str.split("")

        for (let i = 1; i < arr.length; i += 2) {
            arr[i] = String((Number(arr[i]) + Number(a)) % 10)
        }

        return arr.join("")
    }

    const rotate = (str) => {
        const result = str.substring(str.length - b, str.length) + str.substring(0, str.length - b)

        return result
    }

    const vis = new Set()
    let min = s

    // vis 다채우고 정렬할지 아니면 진행중에 업데이트할지
    const dfs = (str) => {
        if (vis.has(str)) return

        vis.add(str)
        if (min > str) min = str

        const addStr = add(str)
        const rotateStr = rotate(str)

        dfs(addStr)
        dfs(rotateStr)
    }

    dfs(s)

    return min
};