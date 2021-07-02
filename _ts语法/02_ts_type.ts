//类型1: 字面量 
let a: 10;
// a = 11;   //类似于常量,定义后无法修改

//可以使用 | 来连接多个类型(联合类型)
let b: "male" | "female";
b = "male"
b = "female"

let c: boolean | string;
c = true;
c = 'hello'

// 类型2: any 表示是任意类型,相当于(js)关闭了类型检测,不推荐使用
// let d: any;  
let d  //这样写同样d的类型也是any(隐式any) 非常不推荐
d = 10
d = true
d = 'hello'
c = d  //d 的类型是any 它可以赋值给任意变量 那个变量也会变成any
c = 'hello'
// unknown 表示未知类型的值,如果不确定变量的类型,用unknown不要用any
let e: unknown
e = 10
e = true
e = 'hello'
let s: string
// s = e  //unknown就不会出现any那样的问题,它会提示错误建议使用unknown代替any
//unknown类型不可以直接赋值给其他变量,但是可以对unknown类型进行判断
if (typeof e === 'string') {  //js写法
  s = e  //不会报错
}
s = e as string  //ts写法
s = <string>e   //ts写法

// void 用来表示空,以函数为例,就表示没有返回值的函数
function fn(): void {
  // return 1 //报错
}
// never 表示永远不会返回结果,它就是用来报错的
function fn2(): never {
  throw new Error('报错了!')
}



