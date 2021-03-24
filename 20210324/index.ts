// 迭代器和生成器
// 当一个对象实现Symbol.iterator属性时，就认为它是可迭代的
// for...of语句
let someArr = [1, "2",false];
for (let val of someArr) {
    console.log(val) // 1, "2", false
}
// for...in语句
for (let i in someArr) {
    console.log(i) // 0,1,2
}
// 区别:1：for in是迭代对象的键，for of是迭代对象键对应的值
// 2：for in可操作任何对象，但是for of主要是迭代对象的值