// keyof索引查询
// ts中的keyof跟js中的object.keys()类似，但是区别在于前者遍历的是类型中的字符串索引，后者遍历的是对象中的键
interface Person {
    name: string,
    age: number,
    height: number
}
type keys = keyof Person;
// 等价于
type keys1 = "name" | "age" | "height";
// 这里使用泛型，强制第二个参数的参数名必须包含在第一个参数的所有字符串索引中
function getPerson<T extends object, K extends keyof T>(rect: T, property: K): T[K] {
    return rect[property];
}
let rect: Person = {
    name: "夏晓锋",
    age: 18,
    height: 222
}
console.log(getPerson(rect, "age")) // 18
console.log(getPerson(rect, "width")); // type "width" is not assignable to parameter of type '"name" | "age" | "height"'

