
// {} 用来指定对象中可以包含那些属性
// 语法:{属性名:属性值}
// 在属性名后边加上?,表示属性是可以选的
let b: { name: string, age?: number };
b = { name: '孙悟空', age: 18 }

//[propName: string] : any 表示任意类型的属性值
let c: { name: string, [propName: string]: any };
//表示c内必须有name属性,且值为字符串,其他类型属性随意 
c = { name: "猪八戒", age: 18, gender: "男" }

/*
* 设置函数结构的类型声明
*    语法:(形参:类型, 形参:类型 ...) => 返回值
* */
let d: (a: number, b: number) => number
d = function (n1, n2): number {
  return 10
}

/* 
* 数组声明后内部只能存放当前类型的元素
* 数组类型的声明方式
*   类型[]
*   Array<类型>
**/
// string[] 表字符串数组
let e: string[]
e = ['a', 'b', 'c'];

// number[] 表示数字类型的数组
let f: number[];
f = [1, 2, 3]

let g: Array<number>
g = [4, 5, 6]

/* 
*  元组,元组就是固定长度的数组
*    语法:[类型,类型,类型] 元素顺序不可变
* */
let h: [string, number];
h = ['hello', 123]

/* 
*  enum 枚举
*    如果需要从多个值中选择一个,建议用枚举
     枚举内的数据值可以叫元素
     每个元素都有自己的编号
     编号从0开始依次递增1
     枚举的编号可以自定义
     如果第一个被自定义为2,那么后面的会在2的基础上依次增加
     我可以通过枚举的编号得到枚举
* */
enum Gender {
  Male = 2,
  Female
}
let i: { name: string, gender: Gender };
i = {
  name: '孙悟空',
  // gender: Gender.Male  // 2
  gender: Gender['2'] // Male

}
console.log(i);
console.log(Gender.Male, Gender.Female);
console.log(Gender[2], Gender[3], Gender['2']);


// console.log(i.gender === Gender.Male)

// &表示同时
let j: { name: string } & { age: number }
j = { name: '猪八戒', age: 18 }

//类型的别名
type myType = 1 | 2 | 3 | 4 | 5;

let k: myType;
k = 5  //此时k的取值范围 === myType

//函数重载声明
function add(x: string, y: string): string
function add(x: number, y: number): number

function add(x: string | number, y: string | number): string | number {
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
}
console.log(add('111', '222'));
console.log(add(111, 222));
// console.log(add('111', 222));   //如果不指定函数重载声明,此时编译器不会报错
// console.log(add(111, '222'));  //如果不指定函数重载声明,此时编译器不会报错
