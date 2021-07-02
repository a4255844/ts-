import { stringify } from "node:querystring";

(function () {
  /* 
  *  以abstract开头的类是抽象类
  *     抽象类和其他类区别不大,只是不能用来创建对象
  *     抽象类是专门用来被继承的
  *     抽象类中可以定义抽象方法
  * * */
  abstract class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    //定义一个抽象方法
    //抽象方法使用abstract开头,没有方法体
    //抽象方法只能定义在抽象类中,子类必须对抽象方法进行重写
    abstract sayHello(): void
  }
  class Dog extends Animal {

    sayHello() {  //必须重写父类的抽象方法,否则报错
      console.log('汪汪汪');
    }

  }
  class Cat extends Animal {
    sayHello() {
      console.log('喵喵喵');
    }

  }
  const dog = new Dog('旺财', 3)
  console.log(dog);

  dog.sayHello()
})()