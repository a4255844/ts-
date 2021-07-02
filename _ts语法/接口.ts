
(function () {
  //描述一个对象的类型
  type myType = {
    name: string,
    age: number
  }
  /*
  *   接口用来定义一个类的结构,用来定义一个类中应该包含哪些属性和方法
  *      同时接口也可以当成类型声明去使用
  * */
  interface myInterface {
    name: string;
    age: number;
  }
  interface myInterface { //接口可以重复,它会自动合并成一个
    gender: string;
  }

  const obj: myInterface = {
    name: 'sss',
    age: 18,
    gender: '男'
  }
  /* 接口可以定义一个调用签名
     调用签名可以作为某个函数的类型使用
     
  */
  interface IsearchFunc {
    (source: string, subString: string): boolean
  }
  const searchString: IsearchFunc = function (source: string, subString: string): boolean {
    return source.search(subString) > 1
  }
  /* 
  *   接口可以在定义类的时候去限制类的结构
  *      接口中的所有的属性都不能有实际的值
  *      接口只定义对象的结果,而不考虑实际值
  *          在接口中所有的方法都是抽象方法
  *      接口可以去继承其他接口
  * */
  interface myInter {
    name: string;

    sayHello(): void
  }
  interface myInter2 {
    sex: string
  }
  interface myInter3 extends myInter2, myInter { }  //接口继承
  /* 
    定义类时,可以使类去实现一个接口,
      实现接口就是使类满足接口的需求,和抽象类类似
      类可以指定多个接口
  */
  class MyClass implements myInter, myInter2 {
    name: string;
    sex: string;
    constructor(name: string, sex: string) {
      this.name = name;
      this.sex = sex
    }
    sayHello() {
      console.log('大家好');
    }
  }
})()