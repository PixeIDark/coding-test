const input = [
  "MinStack",
  "push",
  "push",
  "push",
  "getMin",
  "pop",
  "top",
  "getMin",
];
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// 걍스택 만들고 찌끄리는건 누구나 다함.
// 각 함수에 대한 시간복잡도를 최소로 하는게 관건.
var MinStack = function () {
  this.stack = [];
  this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.min.length === 0 || val <= this.min[this.min.length - 1])
    this.min.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.pop() === this.min[this.min.length - 1]) this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};
