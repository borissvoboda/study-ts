class User {
  // in vanilla JS
  // constructor() {
  // this.name = "Adam";
  // }

  // in TS no constructor, not on a fly
  // name = 'Adam';

  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

new User('Adam', 33);
