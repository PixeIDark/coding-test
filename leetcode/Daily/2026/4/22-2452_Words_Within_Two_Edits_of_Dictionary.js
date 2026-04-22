// 8분
var twoEditWords = function (queries, dictionary) {
  const n = queries[0].length;
  const result = [];

  for (const query of queries) {
    for (const word of dictionary) {
      let count = 0;

      for (let i = 0; i < word.length; i++) {
        if (query[i] !== word[i]) count++;
        if (count > 2) break;
      }

      if (count <= 2) {
        result.push(query);
        break;
      }
    }
  }

  return result;
};