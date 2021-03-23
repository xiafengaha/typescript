// 泛型
// 主要是为了创建可重用的组件，使一个组件支持多种类型的数据
// 创建简单的泛型
function identity<T>(arg : T) : T {
    return arg
};
let output = identity<string>("myString"); // 输出为string类型
let output1 = identity("myString"); // 输出string类型
// 这两种写法都可以
// 使用泛型变量
function identity1<T>(arg : T[]) : T[] {
    console.log(arg.length) // 数组有.length属性
    return arg
};
// 或者
function identity2<T>(arg : Array<T>) : Array<T> {
    console.log(arg.length) // 数组有.length属性
    return arg
};
// 泛型约束
interface LengthWise {
    length: number
};
function identity3<T extends LengthWise>(arg: T): T{
    return arg
};
identity3(3); // 报错，提示未有.length属性
identity3({length:1,value:3}); // 必须包含必须的属性

