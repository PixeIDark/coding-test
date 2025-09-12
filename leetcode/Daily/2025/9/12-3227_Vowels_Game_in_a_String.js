// 엘리스는 모음 % 2 === 1, 부분집합 삭제
// 밥은 모음 % 2 === 0, 부분집합 삭제
// 둘다 최상임 엘리스가 이기는지, 암것도 못하는사람이 짐. 항상 엘리스가 먼저둠
// 시작시 모음 0개면 엘리스는 바로 패배임
// 최적의 수를 어떻게 두게함??
// ?? 모음 개수가 0보다 크면 엘리스가 질 수가 없는데??
// 12분
var doesAliceWin = function (s) {
    const isVowel = (char) => "aeiou".includes(char)

    for (const char of s) {
        if (isVowel(char)) return true
    }

    return false
};