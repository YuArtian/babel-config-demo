class A {
  #privateField = '';
  static STATIC_FIELD = 0;
  static #PRIVATE_STATIC_FIELD = 1;
  constructor() {
    this.#privateField = 'A';
  }
  static publicStaticMethod() {
    A.#PRIVATE_STATIC_FIELD = 2;
    return A.#PRIVATE_STATIC_FIELD;
  }
  #privateMethod() {
    console.log('this.#privateField', this.#privateField);
  }
}
console.log(A.publicStaticMethod() === 42);
class B extends A {
  constructor() {
    super();
    this.b = 'b';
  }
}
const foo = function () {
  console.log('arrow function!');
};
const arr = [1, 2, 3, 4];
console.log('arr.includes(1)?', arr.includes(1));
let arr2 = arr.map(function (item) {
  console.log('arr item', item);
  return item;
});
const p1 = new Promise();
function* gen1() {}