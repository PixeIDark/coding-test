// 30분
var StreamChecker = function (words) {
  this.suffix = [];
  this.root = {};

  for (const word of words) {
    let node = this.root;

    for (let i = word.length - 1; i >= 0; i--) {
      const char = word[i];
      if (!node[char]) node[char] = {};

      node = node[char];
    }

    node.isEnd = true;
  }
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
  this.suffix.push(letter);
  let node = this.root;

  for (let i = this.suffix.length - 1; i >= 0; i--) {
    const char = this.suffix[i];

    if (!node[char]) return false;
    node = node[char];

    if (node.isEnd) return true;
  }

  return false;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */