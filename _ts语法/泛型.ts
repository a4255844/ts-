// function fn(a: any): any { //这样写会关闭TS的类型检测,会污染其他变量
//   return a    
// }

/* 
  在定义函数,类,接口时,类型不明确,在使用的时候才确定类型,此时可以使用泛型
*/

function fn<T>(a: T): T {
  return a
}
//可以直接调用具有泛型的函数
let result = fn(10) //不指定泛型,TS可以自动识别
let result1 = fn<string>('hello') //指定泛型
//泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
  return a
}
fn2<number, string>(123, 'hello');
//泛型约束
interface Inter {
  length: number
}

//T extends Inter 表示泛型必须是Inter实现类(子类)
function fn3<T extends Inter>(a: T): number {
  return a.length
}
fn3('12')
class MyClass<T>{
  name: T;
  constructor(name: T) {
    this.name = name
  }
}
const mc = new MyClass<string>('孙悟空')

//定义一个泛型接口
interface myInter<T> {
  data: Array<T>
  add: (t: T) => T
  getUserId: (id: number) => T | undefined
}
//定义一个储存用户信息的类
class User {
  id: number
  constructor(public name: string, public age: string, id: number = Date.now() + Math.random()) {
    this.name = name;
    this.age = age;
    this.id = id
  }
}
class UserCRUD implements myInter<User> {
  data: Array<User> = []
  add(user: User): User {
    this.data.push(user)
    return user
  }
  getUserId(id: number): User | undefined {
    return this.data.find(item => item.id === id)
  }
}
const userCRUD: UserCRUD = new UserCRUD()
userCRUD.add(new User('xiaoming', '22'))
userCRUD.add(new User('xiaohua', '21'))
let { id } = userCRUD.add(new User('xiao', '11'))
console.log(userCRUD.data);
console.log(userCRUD.getUserId(id));


