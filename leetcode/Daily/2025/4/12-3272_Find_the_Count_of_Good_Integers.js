// 재배열하면 k로 나누어 떨어지는 팬린드롬이 되는 정수 개수

const n = 3, k = 5
// Output: 27
// Explanation:
//     Some of the good integers are:
//     551 because it can be rearranged to form 515.
//     525 because it is already k-palindromic.

// 팬린드롬 정수도 좋은 정수에 포함됨
// 팬린드롬 정수를 구해서 걔가 만들수 있는 일반 정수의 개수 + 1(자기 자신)
// 3자리 수 부터 재배열 가능함 n >= 3
// 44 => 44
// 515 => 515 155 551
// 121 => 121 112 211
// 333 => 333
// 4114 => 4114 4141 4411 1144 1414 1441
// 1441 => 1441 4114
// 4444 => 4444
// 12321 => 12321 21312
// 623326 => 623326 632236 263362 236632 362263 326623
// 7자리 => 6개
// 반 갈죽해서 나온 숫자들의 경우의 수임 6자리 => 3개 => 3 * 2 * 1 = 6, 4자리 => 2개 => 2 * 1 = 2
// 단, 모든 숫자가 다 고유해야지 성립되고 6자리 => 3개(2개 같음) => 3 * 1 = 3, 4자리 => 2개(2개 같음) => 1 = 1
// 중복 처리를 해줄수가 없어 개수를 공식으로 알 수 있어도 그럼 일일이 다해야해 어차피
// TODO: 벽
var countGoodIntegers = function (n, k) {
    const canPalindrome = (num) => {
        const map = new Map()
        const str = String(num)
        let horse = 0

        for (const char of str) {
            const count = map.get(Number(char)) ?? 0
            map.set(Number(char), count + 1)
            if (count % 2 === 0) horse++
            else horse--
        }

        if (horse >= 2) return false
        // map 꺼내서 홀수가 있으면 얘는 가운데
        // 홀수 있는 없든 하나씩만 꺼내서 만들고,
        // 원본과 리버스를 컨캣함, 홀수 있으면 가운데에 얘 추가하고

        // 여기서 만들면 안되고 얘는 원본과 홀수만 제공해주고
        // 다른 함수로 조합을 여러번해서 k로 나누어 떨어지는지 해봐야함

        const arr = []
        let h = null
        for (const [num, count] of map) {
            if (count % 2 === 0) arr.push(num)
            else h = num
        }

    }

    const isGoodNumber = (arr, h, vis) => {

    }

    const limited = Math.pow(10, 3)
    let result = 0

    for (let i = 1; i < limited; i++) {

        // 걍 가능성만 보면돼 재배열해서 될 수 있냐 없냐만 만들지 않아도돼
        // 숫자 개수가 홀수인 숫자가 두 번 이상일 시 가망없음
        // 함수로 해보자 입력은 숫자 출력은 불리언
        if (!canPalindrome(i)) ;

        // 가능하면 이제 팰린드롬 만들어서 k로 나누어 떨어지는지
        // 여기까지 합격하면 result++
    }

    console.log(result)
};

// console.log(countGoodIntegers(n, k));
