class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}

let root = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let qute = new TreeNode(333);

root.addChild(node2);
root.addChild(node3);
node2.addChild(qute);

console.log(root.children[0].children[0].data);
