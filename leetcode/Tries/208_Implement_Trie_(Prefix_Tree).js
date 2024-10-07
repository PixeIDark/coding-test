// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

// str 들어오면 char 분해해서 배열로 들어가야함.
// insert로 단어 쪼끔 겹치는 얘오면 잘 갈라져야함.
var Trie = function () {
  this.trie = {};
};
/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let temp = this.trie;

  for (const char of word) {
    if (!temp[char]) temp[char] = {};
    temp = temp[char];
  }
  temp.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let temp = this.travel(word);
  return temp !== null && temp.isEnd === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let temp = this.travel(prefix);
  return temp !== null;
};

Trie.prototype.travel = function (word) {
  let temp = this.trie;

  for (const char of word) {
    if (!temp[char]) return null;
    temp = temp[char];
  }
  return temp;
};
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
