// 21분
var Spreadsheet = function (rows) {
    this.map = new Map()
};

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
    this.map.set(cell, value)
};

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
    this.map.delete(cell)
};

/**
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
    const arr = formula.substring(1).split("+")
    let sum = 0

    for (const str of arr) {
        if (!isNaN(Number(str))) {
            sum += Number(str)
            continue
        }

        const num = this.map.get(str) ?? 0

        sum += num
    }

    return sum
};

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */