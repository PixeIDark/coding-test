// map의 키로 패킷을 주고 중복관리
// 기본적으로 선입선출구조, push - shift // 반환할 패킷없으면 []
// getCount(5, 100, 110) 범위내 패킷개수 반환 0은 목적지, 1 start, 2 end
// TODO: 벽, 30분안에 절대 못품 걍
var Router = function (memoryLimit) {
    this.limit = memoryLimit
    this.arr = []
};

/**
 * @param {number} source
 * @param {number} destination
 * @param {number} timestamp
 * @return {boolean}
 */
// 추가되면 트루반환, 중복이 있으면 추가하지않고 펄스반환
// 추가해서 크기가 리밋보다 크면 [0]제거
Router.prototype.addPacket = function (source, destination, timestamp) {

    if (this.arr.some(([a, b, c]) => source === a && destination === b && timestamp === c)) return false

    this.arr.push([source, destination, timestamp])

    if (this.arr.length > this.limit) {
        const [source] = this.arr.shift()
    }

    return true
};

/**
 * @return {number[]}
 */
// return arr.shift()
Router.prototype.forwardPacket = function () {
    return this.arr.shift() || []
};

/**
 * @param {number} destination
 * @param {number} startTime
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function (destination, startTime, endTime) {
    let count = 0

    for (const [_, location, time] of this.arr) {
        if (destination !== location) continue
        if (time <= endTime && time >= startTime) count++
    }

    return count
};

/**
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */