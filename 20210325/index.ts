// 装饰器
// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，访问符，属性或参数上。
// 装饰器使用@expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
// 例如有一个@sealed装饰器
function sealed(target) {
    // do something
}

// 装饰器工厂
// 我们要定制一个修饰器如何应用到一个声明上
// 就得写一个装饰器工厂函数
function color(value:string) {
    // 这是一个装饰器工厂
    return function (target) {
        // 这是装饰器

    }
}
// 若多个装饰器用于一个声明上时，求值方式为a(b(x))；a,b为定义的装饰器的先回。x为值
// 类装饰器
function ageFun(args: number) {
    return function(target: Function) {
        target.prototype.age = args;
    }
}
@ageFun(18)
class Hello {
    name: string;
    age: number;
    constructor() {
        console.log('hello');
        this.name = "xiaxiaofeng";
    }
}
console.log(Hello.prototype.age) // 18
let hello = new Hello();
console.log(hello.age) // 18
// 方法装饰器
// 啊还没搞懂。