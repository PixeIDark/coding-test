// 모든 방을 모두 열 수 있는지. 0번 방은 무료임

const rooms = [[1], [2], [3], []]
// Output: false
// Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.

// dfs 로 입장한 다음 방문한 방 번호를 set 에 결고겸 중복방지로 저장
// 7분
var canVisitAllRooms = function (rooms) {
    const vis = new Set()

    const dfs = (curr) => {
        if (vis.has(curr)) return

        vis.add(curr)
        for (const next of rooms[curr]) {
            dfs(next)
        }
    }

    dfs(0)

    return rooms.length === vis.size
};

console.log(canVisitAllRooms(rooms));