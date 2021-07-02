
(function () {
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    sayHello() {
      console.log('动物在叫');

    }
  }
  /* 所有子类都属于父类,在指定类型的时候可以使用父类
     父类方法和子类同名,优先执行子类的方法
  */
  class Dog extends Animal {
    sex: string
    constructor(name: string, age: number, sex: string) {
      super(name, age) //在子类中使用constructor,必须调用父类的构造器 super表示当前父类 
      this.sex = sex
    }
    sayHello() {  //方法和父类重名,会优先执行自己的方法
      // console.log('汪汪汪');
      super.sayHello() //super表示当前父类

    }

  }
  class Cat extends Animal {
    sayHello() {
      console.log('喵喵喵');

    }

  }
  const dog = new Dog('旺财', 3, '公')
  console.log(dog);

  dog.sayHello()
})()