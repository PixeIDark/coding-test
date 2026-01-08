// 7분
var fibGenerator = function* () {
  // yield를 반환함
  let curr = 0;
  let next = 1;

  while (true) {
    yield curr;
    const temp = next + curr;
    curr = next;
    next = temp;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */