// 회의가 없는날 찾아보자!

const days = 57, meetings = [[3, 49], [23, 44], [21, 56], [26, 55], [23, 52], [2, 9], [1, 48], [3, 31]]
// Output: 2
// Explanation:
//     There is no meeting scheduled on the 4th and 8th days.

// [1, 100], [2, 30], [3, 70]
// [1, 10], [9, 13], [12, 14]
// 중복 처리를 위해 미팅스를 통합해나가야함
// [0] 오름차 정렬 후, 다음꺼와 비교 후 통함. 통합된거를 또 비교
// 일단 현재의 끝나는 날과 다음의 시작날이 같은나 작은 경우 통합 대상임
// 그게 아니면 계산 들어가야하나.. 모르것다
var countDays = function (days, meetings) {
    meetings.sort((a, b) => a[0] - b[0])

    let prev = meetings[0]
    console.log(meetings)
    for (let i = 1; i < meetings.length; i++) {
        const [prevStart, prevEnd] = prev
        const [currStart, currEnd] = meetings[i]

        if (prevEnd >= currStart) {
            prev = [prevStart, Math.max(prevEnd, currEnd)]
        } else {
            days -= prevEnd - prevStart + 1
            prev = [currStart, currEnd]
        }
    }

    days -= prev[1] - prev[0] + 1

    return days - prev[1] - prev[0] + 1
};

console.log(countDays(days, meetings))