class User {
  // class의 기본 new class() 괄호안에서 오는 녀석임
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("이름 짧음");
      return;
    }
    this._name = value;
  }
  // User라는 클래스의 메서드임. 다양한 기능을 만들어보자.
  sayHi() {
    console.log(this.name);
  }
}

let user = new User("Johss");

console.log(user.name);
let [prev, curr, next] = [null, "head", null];
console.log(curr.next);
