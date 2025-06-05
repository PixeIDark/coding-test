// 사전순으로 가장 작은 3개 반환 startsWith 인걸로
// products 를 trie 구조 넣기전에 사전순으로 한 번 정렬하고 넣어라
// searchWord로 찾을 때 철자 1개를 예시로 들면 철자 하나를 trie에서 넣고
// 그 뎁스에서 와일문으로 3개가 찰때까지 반복문으로 isEnd 찾을때까지 반복
// 46분
var suggestedProducts = function (products, searchWord) {
    products.sort()

    const trie = {}

    for (const product of products) {
        let node = trie

        for (const char of product) {
            if (!node[char]) node[char] = {}
            node = node[char]
        }
        node.isEnd = true
    }

    const dfs = (node, str, arr) => {
        if (arr.length === 3) return

        if (node?.isEnd) {
            arr.push(str)
        }

        for (const char in node) {
            dfs(node[char], str + char, arr)
        }

    }

    // console.log(trie) { m: { o: { b: [Object], n: [Object], u: [Object] } } }
    let node = trie
    let str = ""
    const result = []

    for (const char of searchWord) {
        const arr = []
        if (node && node[char]) {
            node = node[char]
            str += char
            dfs(node, str, arr)
        } else node = null
        result.push(arr)
        // bfs 아니라 dfs로 뚫어야함 배열의 길이가 3이 되면 모두 종료하고
    }

    return result
};