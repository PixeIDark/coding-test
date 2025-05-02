// 도미노 결과 반환

const dominoes = ".L.R...LR..L.."
// Output: "LL.RR.LLRRLL.."

// as 1
// while 문안에 for 문 써서 순차적으로 dfs 돌고, 만약 도미노가 변했으면 for 문에서 변화감지 변수를 트루로함
// 변수가 펄스면 while 문도 종료 트루면 for 문을 계속 돔
// as 2
// for 문 돌면서 . 이면 왼쪽 오른쪽 가장 가까운 l,r 탐색 l 과 r 이 같은 거리에 있으면 변하지 않음
// 변할 시에는 원래 l, r 이였던 얘랑 차이를 둬서 구별해야함 앞으로 탐색할 때
// R 찾기 탐색 시 R 오른쪽부터 L 이면 어케 둘이 잘 조율해서 바꿔주면돼고
// R 이거나 끝이면 모든 얘를 다 R로 바꿔주면됨
// L 찾기 탐색 시 L 왼쪽부터 모두 L로 바꾸면됨
// 바꿔가다가 R 만나면 시작 인덱스 a 와 R 만난 인덱스 b
// b - a 인덱스는 "." 으로 바꿈 얘는 "c" 라는 가칭을 부여하고
// 앞으로 처음 바꿀때는 l, r 소문자로 가칭을 정리해서 c를 만날 때까지는 모두 바꾸는 정책으로감
// L 전진 시 c, L, R 을 제외하곤 모두 l 로 바꿔야함 r 이더라도
var pushDominoes = function (dominoes) {
    // 도미노에 힘을 부여해보자
    dominoes = dominoes.split("")

    let count = 0
    const arr = Array(dominoes.length).fill(0)

    for (let i = 0; i < dominoes.length; i++) {
        if (dominoes[i] === "R") count = dominoes.length
        else if (dominoes[i] === "L") count = 0
        else count = Math.max(0, count - 1)
        arr[i] = arr[i] + count
    }

    for (let i = dominoes.length - 1; i >= 0; i--) {
        if (dominoes[i] === "L") count = dominoes.length
        else if (dominoes[i] === "R") count = 0
        else count = Math.max(0, count - 1)
        arr[i] -= count

    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) arr[i] = "R"
        else if (arr[i] < 0) arr[i] = "L"
        else arr[i] = "."
    }

    return arr.join("")
};

console.log(pushDominoes(dominoes))