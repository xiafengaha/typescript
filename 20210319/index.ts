// 修饰符
// public 公有 在类里面、子类、类外部都可以访问
// protected 保护类型 在类里面 子类里面可以访问，类外部没法访问
// private 私有 在类里面可以访问，在子类、类外部不能访问
class Person{
    // public name: string // 1：公用
    // protected name: string  // 2：保护类型，只能在类和子类里面访问
    private name: string // 3：私有类型，只能在类里可以访问，外部以及子类都不能访问
    constructor(name:string){
        this.name = name;
    }
    run() {
        console.log(`${this.name}在跑步`)
    }
}
class Web extends Person {
    constructor(name: string){
        super(name)
    }
    work() {
        console.log(`${this.name}在工作`)
    }
}
var a = new Web("xiaxiaofeng");
// 1
a.work() // xiaxiaofeng在工作
a.name //xiaxiaofeng 外部可以访问公有属性
// 2
a.name // 报错
a.run() // protected在类里面可以访问
a.work()
// 3
a.run() // private 只能在类内部可以访问
a.name // 在类外部不能访问 

