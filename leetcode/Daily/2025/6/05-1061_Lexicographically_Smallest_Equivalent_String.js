/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
// s1, s2 이용해서 동등한 얘들 그룹 구하고
// 그룹 내부에서 가장 사전적으로 앞에 있는 얘를 값으로 할당함
// 그전에 유니온 파인드로 부모가 같게 설정 부모는 인덱스 charCode 해서 함
// 32분
var smallestEquivalentString = function (s1, s2, baseStr) {
    const parent = Array(26).fill(0).map((_, i) => i)

    const find = (parent, child) => {
        if (parent[child] === child) return child
        return parent[child] = find(parent, parent[child])
    }

    const union = (parent, a, b) => {
        a = find(parent, a)
        b = find(parent, b)

        if (a < b) parent[b] = a
        else parent[a] = b
    }

    // s1, s2 같이 순회
    // a b c d e f g h i j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y z
    // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
    for (let i = 0; i < s1.length; i++) {
        const a = s1[i].charCodeAt(0) - 97
        const b = s2[i].charCodeAt(0) - 97

        union(parent, a, b)
    }

    // find 함수 써가지고 근본 부모 찾고, 걔로 설정함
    let result = ""

    for (let i = 0; i < baseStr.length; i++) {
        const child = baseStr[i].charCodeAt(0) - 97
        const char = find(parent, child)
        result += String.fromCharCode(char + 97)
    }

    return result
};