// 基础类型
// 布尔
let isDone : boolean = true; 
// 数字
let total : number = 8;
// 字符串
let str : string = "xiaxiaofeng";
// 也可以用``包含
let name : string = `my name is ${str}`;
// 数组
let arr : number[] = [1,2,3];
// 可以使用Array<数据类型>也可以是string，boolean啥的
let arrList : Array<number> = [1,2,3];
// 枚举
enum Students {XiaoMing,XiaoHong,XiaoLi};
let studentName : Students = Students.XiaoMing;
// any 不知道是什么类型
let goods : any = {
    name: "可乐"
}
// void与any相反，表示没有任何类型
let userName: void = undefined;
// 还有null与undefined与void类似
// 还有object,这个表示非原始类型，除number,string,boolean,symbol,null,undefined之外的