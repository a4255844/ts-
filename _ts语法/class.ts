class Dog {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }
  bark() {
    console.log(`${this.name}汪汪!`);

  }
}
const dog = new Dog('旺财', 3)
const dog2 = new Dog('小黑', 2)
dog2.bark()