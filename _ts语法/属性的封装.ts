(function () {
  //定义一个表示人的类
  class Person {
    //Ts可以在属性前添加属性修饰符
    /* 
       public 公共属性,默认的属性就是公共属性,可以在类外部访问
       private 私有属性,私有属性只能在当前类内部访问,子类不可访问
               通过在类中添加方法使得私有属性可以被外部访问
       protected 受包含的属性,只能在当前类和当前类的子类中使用
       readonly修饰符: 对类中的属性成员进行修饰,表示该属性为只读属性,除了构造函数内,其他地方均不可修改
      构造函数中的参数一旦使用了修饰符,那么它会自动的称为类的属性成员
    */
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
    // constructor(public name: string, protected age: number) {
    //   this.name = name;
    //   this.age = age;
    // }

    /* 
       getter方法用来读取属性
       setter方法用来设置属性
            它们被称为属性的存取器
    */
    // 定义方法,用来获取name属性
    // getName() {
    //   return this._name
    // }
    // //定义方法,用来设置name属性
    // setName(value: string) {
    //   return this._name = value
    // }
    // getAge() {
    //   return this._age
    // }
    // setAge(value: number) {
    //   if (value >= 0) {  //我们可以通过判断来限制_age的取值范围
    //     this._age = value
    //   }
    // }

    // TS中设置getter方法的方式
    get name() {
      return this._name
    }
    set name(value: string) {
      this._name = value
    }
    get age() {
      return this._age
    }
    set age(value: number) {
      if (value >= 0) {
        this._age = value
      }
    }
  }
  const per = new Person('孙悟空', 18)
  /* 
    现在属性是在对象中设置的,属性可以任意的被修改
        属性可以任意被修改将会导致对象中的数据变得非常不安全
  // */
  // per._name = '猪八戒'; //私有属性不能通过.的方式在外部访问
  // per._age = -22
  per.age = -22
  console.log(per);

  class A {

    // private num: number  //只能在当前类内使用
    protected num: number  //只能在当前类和当前类的子类中使用
    constructor(num: number) {
      this.num = num
    }
  }
  class B extends A {
    test() {
      console.log(this.num);

    }
  }
  const b = new B(123)
  // class C {
  //   name: string;
  //   age: number;
  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age =age
  //   }
  // }
  class C {
    //可以直接将属性定义在构造函数中
    constructor(public name: string, public age: number) {
      this.name = name;
      this.age = age;
    }
  }
  const c = new C('猪八戒', 22)
  console.log(c);


})()