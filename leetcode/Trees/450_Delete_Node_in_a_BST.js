// key 와 val 같은 노드를 삭제하고 왼쪽이나 오른쪽 노드 할당하기 키 못찾으면 그대로 반환

const root = [5, 3, 6, 2, 4, null, 7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
//     One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
//     Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

// 왼쪽 작고 오른쪽 커
// 얇은 복사 이용해서 할당
// 20분
function deleteNode(root, key) {
    if (!root) return null;

    // 1. 삭제할 노드 찾기
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left && !root.right) {
            return null;
        }

        if (!root.left) return root.right;
        if (!root.right) return root.left;

        let successor = root.right;
        while (successor.left) {
            successor = successor.left;
        }

        root.val = successor.val;

        root.right = deleteNode(root.right, successor.val);
    }

    return root;
}