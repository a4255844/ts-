/* 声明一个变量a,同时制定它的类型为number */
let a: number
/* 此时a 的值只能是数字 */
a = 10
a = 12
// a = 'hello'    直接报错

//声明变量直接进行赋值
// let b: boolean = false;  //常规写法
let b = true  //简写方式,TS依然会限制b的类型为boolean
b = false
// b = 123  报错

/* TS带来的好处
   1. JS中的函数是不考虑参数的类型和个数的
      如下代码,如果我们不考虑类型,容易出现未知错误,从而带来一连串的安全隐患
      如果使用TS就会避免这种情况
*/
/*
  function sum(a, b) {
  return a + b;
}
console.log(sum(123,456)); //579
console.log(sum(123,'456')); //'123456'
 */
/* 使用ts开发可以吧以下错误排除在萌芽阶段,ts会智能提示错误 */
function sum(a: number, b: number) {
  return a + b;
}
sum(123, '456')