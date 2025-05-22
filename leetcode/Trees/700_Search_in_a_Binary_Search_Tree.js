// val 찾아서 서브 트리로 반환

const root = [4, 2, 7, 1, 3], val = 2
// Output: [2,1,3]

// left 는 부모보다 작고 right 는 부모보다 크다고 가정
// 현재 val 에따라 트리 선택해서 탐
// 5분
var searchBST = function (root, val) {
    let node = root

    while (true) {
        if (!node) return null

        if (node.val > val) node = node.left
        else if (node.val < val) node = node.right
        else return node
    }
};