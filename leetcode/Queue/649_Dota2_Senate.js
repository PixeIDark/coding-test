// R, D 가 최선을 다했을 때 마지막에 승리하는 자 리턴

const senate = "RDRDRDDRDRDRDRDRRDRDRDRDRDRDDDDRRDRDRDRDRDRDRDRRRRRDRDRDRDRDDDDDRDRDRDRDRDRDRDRRDRDRDRDRDRDRRDRDRDRDRDRDRDRDRRDRDRDRDRDRRD"
// Output: "Dire" //RRRRDDDDDD
// Explanation:
//     The first senator comes from Radiant and he can just ban the next senator's right in round 1.
// And the second senator can't exercise any rights anymore since his right has been banned.
// And the third senator comes from Dire and he can ban the first senator's right in round 1.
// And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.

// 각 인물들은 자기 보다 뒤에 있는 얘들을 실각 시킬 것으로 가정
// 뒤에 없으면 맨 앞에 있는 얘를 실각 시킴
// 최종 라운드에서 마지막까지 실각안된 쪽이 승리 (둘 중 하나는 전멸함)
// RDRRDDD => RRRDDD => RRRDD => RRRD => RRD, Round 2 RRD => RR
// 큐에 일단 푸시와 동시에 카운팅을 해
// 상대를 만나면 카운팅 - 1 하고 상대를 실각시킴
// 만약에 실각을 못시키면 상대를 큐에 넣고 큐는 시프트함
// R 은 언시프트 D 는 푸시라가정해보자
// RDDRDRRD => RDDR
// [R] => [R,D] => [R, D, D] => [R, R, D, D] 조립해야하나
// 걍 순서대로 넣고, 힘이 남아있으면 앞에서부터 체크해서 제거
// 그리고 수가 같으면 다음 라운드에서 다시 붙는다
// RDDR => RDR
// 96분
var predictPartyVictory = function (senate) {
    const dfs = (senate) => {
        const queue = []
        const powers = {R: 0, D: 0}
        const counts = {R: 0, D: 0}

        for (const s of senate) {
            if (queue.length && queue[queue.length - 1] !== s && powers[queue[queue.length - 1]] >= 1) {
                powers[queue[queue.length - 1]]--
            } else {
                queue.push(s)
                counts[s]++
                powers[s]++
            }
        }

        for (let i = 0; i < queue.length; i++) {
            const friendly = queue[i]
            const enemy = friendly === "R" ? "D" : "R"

            if (powers[enemy]) {
                counts[friendly]--
                powers[enemy]--
                queue.splice(i, 1)
                i--
            }
        }

        if (counts.R !== 0 && counts.D !== 0) return dfs(queue)
        return counts
    }

    const counts = dfs(senate)

    return counts.R > counts.D ? "Radiant" : "Dire"
};

console.log(predictPartyVictory(senate))