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
// 1：方法装饰器被应用到方法的属性描述符上，可以用来监视、修改、替换方法的定义
// 2：方法装饰器会运行时传入3个参数
    // 1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
    // 2.成员的名字
    // 3.成员的属性描述符
function get(params:any) {
    return function(targer:any, methodName:any, desc:any) {
        var oldMethod = desc.value; // 1.保存原方法体
        // 2.重新定义方法体
        desc.value = function (...args:any[]) {
            // 3.把传入的数组元素转为字符串
            let newArgs = args.map(item => {
                return String(item)
            });
            // 4.执行原来的方法体
            oldMethod.apply(this, newArgs);
            // 等于
            // oldMethod.call(this, ...newArgs);
        }

    }
}
class HttpClient {
    constructor() {}
    @get("https://github.com/xiafengaha");
    getData(...args:any[]){

    }
}
var http = new HttpClient();
http.getData(1,2,true) // ["1","2","true"]

//装饰器执行顺序
// 1:当有多个参数装饰器时，从最后一个向前执行
// 2:方法和方法参数中参数装饰器先执行
// 3:类装饰器总是最后执行
// 4:方法和属性装饰器，谁在前谁先执行