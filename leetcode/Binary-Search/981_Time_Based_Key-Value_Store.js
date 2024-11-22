// 클래스 만들기

const input = [
  [],
  ["foo", "bar", 1],
  ["foo", 1],
  ["foo", 3],
  ["foo", "bar2", 4],
  ["foo", 4],
  ["foo", 5],
];
// Output
//     [null, null, "bar", "bar", null, "bar2", "bar2"]
// Explanation
// TimeMap timeMap = new TimeMap();
// timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
// timeMap.get("foo", 1);         // return "bar"
// timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
// timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
// timeMap.get("foo", 4);         // return "bar2"
// timeMap.get("foo", 5);         // return "bar2"

// timeStamp 길이만큼 배열크기를 만듬. get으로 배열 크기를 초과하는 timeStamp 거나 없는 timeStamp 면 가장 연관된것들 중 큰것.
// timeStamp 가 저장된것보다 작으면 아무것도 출력안함
// 저장된것보다 크면 작은 것들중 가장 큰수 출력
var TimeMap = function () {
  this.timeMap = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.timeMap.has(key)) {
    this.timeMap.set(key, []);
  }
  this.timeMap.get(key).push({ value, timestamp });
};

TimeMap.prototype.get = function (key, timestamp) {
  if (!this.timeMap.has(key)) return "";

  const values = this.timeMap.get(key);
  let left = 0;
  let right = values.length;

  while (right > left) {
    let mid = Math.floor((right + left) / 2);

    if (values[mid].timestamp <= timestamp) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left > 0 ? values[left - 1].value : "";
};

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 2);
console.log(timeMap.get("foo", 2));

// var TimeMap = function () {
//     this.timeMap = new Map();
// };
//
// TimeMap.prototype.set = function (key, value, timestamp) {
//     if (!this.timeMap.has(key)) {
//         this.timeMap.set(key, [value]);
//     }
//
//     let count = timestamp - this.timeMap.get(key).length;
//
//     while (count > 0) {
//         this.timeMap.get(key).push(value);
//         count--;
//     }
// };
//
// TimeMap.prototype.get = function (key, timestamp) {
//     if (timestamp >= this.timeMap.get(key).length) {
//         return this.timeMap.get(key)[this.timeMap.get(key).length - 1];
//     } else {
//         return this.timeMap.get(key)[timestamp];
//     }
// };
