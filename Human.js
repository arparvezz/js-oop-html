class Human {
  constructor(name, age, gender, address) {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._address = address || null;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    this._gender = value;
  }

  get address() {
    return this._address;
  }
  set address(value) {
    this._address = value;
  }

  toString() {
    console.log(`${this._name}, ${this._age}, ${this._gender}`);
  }
}


let obj = {
  name: 'Xiaomi POCO C13',
  price: 13999,
  year: 2021,
  manufacturedBy: 'China'
}
export {Human, obj};
