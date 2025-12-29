// 23분
var MapSum = function () {
  this.root = {};
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  const prevValue = this.map.get(key) ?? 0;
  let node = this.root;

  for (const char of key) {
    if (!node[char]) node[char] = {};
    node = node[char];

    if (!node.value) node.value = 0;
    node.value += val - prevValue;
  }

  this.map.set(key, val);
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let node = this.root;

  for (const char of prefix) {
    if (!node[char]) return 0;
    node = node[char];
  }

  return node.value;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */