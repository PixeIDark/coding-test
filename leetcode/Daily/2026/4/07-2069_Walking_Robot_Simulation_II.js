// 경계에 부딪치면 시계 반대 방향으로 90도 회전
// (0, 0) 시작, 동쪽 방향
// this.dir = ["East", "North", "West", "South"]
// 73분. 폐급문제
/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function (width, height) {
  this.width = width;
  this.height = height;
  this.location = 0;
  this.mod = 2 * (width + height - 2);
  this.moved = false;
  // width: 6, height: 3
  // x >= width || y >= height || x < 0 || y < 0 나온경우 백 => 방향전환
  // 4가지의 분기로 나눠서 각 분기마다 바꿔야할 방향이 정해져 잇음
  // 둘레만 무한반복하는 구조 %로 어케 하면될꺼같은데 모르것다
  // 12 11 10 9  8  7
  // 13 0  0  0  0  6
  // 0  1  2  3  4  5
  // 하나의 location 으로 상태기록, get요청시에만 location을 % 14로 정리해서 반환
  // location === 1 => [1, 0]
  // loaction === 5 => [5, 0]
  // location === 6 => [5, 1]
  // loaction === 7 => [5, 2]
  // loaction === 12 => [0, 2]
  // location === 13 => [0, 1]
  // location === 14 => [0, 0]
};

/**
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function (num) {
  this.location = (num + this.location) % this.mod;
  this.moved = true;
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function () {
  // 0 ~ width: x 증가
  if (this.location >= 0 && this.location < this.width) {
    return [this.location, 0];
  }
  // width ~ width + height: y 증가
  if (this.location >= this.width && this.location < this.width + this.height - 2) {
    return [this.width - 1, this.location - this.width + 1];
  }
  // 7 ~ 12: x 감소
  if (this.location >= this.width + this.height - 2 && this.location < this.width * 2 + this.height - 3) {
    return [this.width * 2 + this.height - this.location - 3, this.height - 1];
    // this.width * 2 - 2 + this.height - 1 - this.location
  }
  // 12 ~ 0: y감소
  if (this.location >= this.width * 2 + this.height - 3 && this.location < this.mod) {
    return [0, this.mod - this.location];
  }
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function () {
  if (this.location === 0 && this.moved) return "South";

  if (this.location >= 0 && this.location < this.width) {
    return "East";
  }
  if (this.location >= this.width && this.location < this.width + this.height - 1) {
    return "North";
  }
  if (this.location >= this.width + this.height - 1 && this.location < this.width * 2 + this.height - 2) {
    return "West";
  }
  if (this.location >= this.width * 2 + this.height - 2 && this.location < this.mod) {
    return "South";
  }
};

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */