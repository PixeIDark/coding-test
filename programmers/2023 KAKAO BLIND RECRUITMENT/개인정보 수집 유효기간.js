// 파기해야할 정보 배열로 번호 반환. today를 넘었으면 파기임
// 달은 28일까지 존재
// 12월 01일에 6달 유효기간 주면 5월 28일 까지임, 즉 -1일 하면됨
// 1. terms를 객체형식으로 정리. 키 => 값 꺼내쓸 수 있게
// 2. privacie를 " " 기준으로 나눠 배열로 변환
// 3. privacie[0] + privacie[1] 계산 하는 함수 만듬
// 4. today <= privacie 비교하는 함수 만듬
// 40분
function solution(today, terms, privacies) {
    const expiryDate = {}

    for (const term of terms) {
        const [key, value] = term.split(" ")
        expiryDate[key] = Number(value)
    }

    // privacie[0] + privacie[1] 계산 하는 함수
    const getTotalDate = (date, term) => {
        const arr = date.split(".").map(Number)


        arr[2]--

        if (arr[2] === 0) {
            arr[1]--
            arr[2] = 28
        }

        arr[1] += expiryDate[term]

        while (arr[1] > 12) {
            arr[0]++
            arr[1] -= 12
        }

        return arr
    }

    // today <= privacie 비교하는 함수 만듬
    const canDate = (arr1, arr2) => {
        for (let i = 0; i < 3; i++) {
            if (arr1[i] > arr2[i]) return true
            else if (arr1[i] < arr2[i]) return false
        }
    }

    const toDate = today.split(".").map(Number)
    const result = []

    for (let i = 0; i < privacies.length; i++) {
        const [date, term] = privacies[i].split(" ")
        const targetDate = getTotalDate(date, term)
        console.log(toDate, targetDate)

        if (canDate(toDate, targetDate)) result.push(i + 1)
    }

    return result
}