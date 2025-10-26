// 22분
var Bank = function (balance) {
  this.bank = [-1, ...balance]
};

// account1 => account2 로 money 만큼 입금
Bank.prototype.transfer = function (account1, account2, money) {
  if (account1 >= this.bank.length || account2 >= this.bank.length) return false

  if (this.bank[account1] >= money) {
    this.bank[account1] -= money
    this.bank[account2] += money
    return true
  } else return false
};

// 무조건 트루 입금하는거라 계좌의 잔액에 관련없음
Bank.prototype.deposit = function (account, money) {
  if (account >= this.bank.length) return false

  this.bank[account] += money

  return true
};

// 출금 계좌 잔액확인하고 가능하면 금액 차감하고 true 불가능하면 false
Bank.prototype.withdraw = function (account, money) {
  if (account >= this.bank.length) return false

  if (this.bank[account] >= money) {
    this.bank[account] -= money
    return true
  } else return false
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */