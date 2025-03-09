// k개의 색이있는 조화 패턴 몇개 나오는지

const colors = [0, 1, 0, 0, 1], k = 3
// Output: 3

// 슬라이딩으로 이어나가고, 처음과 끝의 요소의 색이 바뀌면 조화 => 조화 성공임
// [0,1,0,1,1,1,1] 0,1,0,1,0,1 <= 한동안 조화할 일 없음.
// 하.. 슬라이딩 만들기에 조건 추가, 조화 안되는 얘는 만들지 않고 생략하고 다음 인덱스로
// 슬라이딩 제거 조건 추가, 조화 풀리는 순간 끝 인덱스 부터 다시 탐색
var numberOfAlternatingGroups = function (colors, k) {
    let i = -1
    let result = 0
    colors = [...colors, ...colors.slice(0, k - 1)]

    const createWindow = (idx) => {
        let arr = [colors[idx]]
        i = idx + 1

        while (arr.length < k && i < colors.length) {
            let curr = colors[i]

            if (curr === arr[arr.length - 1]) {
                arr = [curr]
            } else arr.push(curr)

            i++
        }
        if (arr.length === k) {
            result++
            return arr
        } else return null
    }

    let slidingWindow = createWindow(0)

    while (slidingWindow && i < colors.length) {
        const end = slidingWindow[slidingWindow.length - 1]
        if (end === colors[i]) {
            slidingWindow = createWindow(i)
            i--
        } else {
            slidingWindow.push(colors[i])
            result++
        }
        i++
    }

    return result
};

console.log(numberOfAlternatingGroups(colors, k))