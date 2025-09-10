// 우정관계인 사람이 모두 서로 소통할 수 있게 언어를 가르쳐야함. 가르쳐야하는 최소 사람개수
// 가르침은 연쇄적으로 일어나지않고, 동시에 일어남.
// 우정관계의 사람들이 배울 언어는 내가 임의로 정하는 것
// languages: [][]language(index: person)
// 1. 서로 소통이 안되는 친구 목록을 만들기 => A가 알고 있는 언어를 set에 넣고 B가 아는 언어를 has로 검증
// 2. 1 ~ n 의 언어를 친구 목록에 대입해보기
// 30분
var minimumTeachings = function (n, languages, friendships) {
    const noShares = []
    const list = languages.map(x => new Set(x))

    // 이부분 최적화여지 분명히 있음
    // set A,B,C 를 만들고 A + B = C 일 시 겹치는거x 푸시함
    // for(const [a, b] of friendships) {
    //     const set = new Set([...languages[a - 1]])
    //     let isShare = false

    //     for(const language of languages[b - 1]) {
    //         if(set.has(language)) {
    //             isShare = true
    //             break
    //         }
    //     }

    //     if(!isShare) noShares.push([a, b])
    // }

    // 차이가 없는디..
    for (const [a, b] of friendships) {
        const setA = new Set([...languages[a - 1]])
        const setB = new Set([...languages[b - 1]])
        const setC = new Set([...languages[a - 1], ...languages[b - 1]])

        if (setA.size + setB.size === setC.size) noShares.push([a, b])
    }

    let min = 500

    for (let i = 1; i <= n; i++) {
        const set = new Set()

        // a <=> b 에서 둘 다 언어 3을 주고, a <=> c 관계가 나왔을 시, a는 이미 언어3을 가짐
        // 그러면 c에게만 언어 3을 주면됨, 언어 i를 부여받은 사람은 미리 set에 정리. set.size로 합산하면됨
        for (const [a, b] of noShares) {
            // 무조건 a, b 소통안됨. 겹치는 언어x
            // i가 이미 알고 있는 경우에는 추가해서는 안됨 => 미리 set으로 탐지가능하게 language 자료 변형해야함
            if (!list[a - 1].has(i)) set.add(a)
            if (!list[b - 1].has(i)) set.add(b)
        }

        min = Math.min(min, set.size)
    }

    return min
};