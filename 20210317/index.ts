// 接口的高阶用法
// 索引类型 
interface RoleDic {
    [id: number]: string
}
const role1 : RoleDic = {
    0: "admin",
    1: "superAdmin"
};
const role2 : RoleDic = { // 这里会报错，因为不能将{a:string,b:string}分配给RoleDic
    a: "admin",
    b: "superAdmin"
}
const role3 : RoleDic = ["admin","superAdmin"];
const roleObj = { // 这个obj里面定义了number类型的123属性，
    123: "a",//还有字符串类型的123，这里数值类型会被转化为字符串类型，所以后面的会覆盖前面的
    "123": "b"
}
// 混合类型接口
// 函数是对象类型，对象有属性，所以一个对象有可能是函数也可能包含一些属性

interface Counter {
    (): void; // 这里定义Counter这个结构必须包含一个函数，函数的要求是无参数，返回值为void，即无返回值
    count: number; // 而且这个结构还必须包含一个名为count、值的类型为number类型的属性
  }
  const getCounter = (): Counter => { // 这里定义一个函数用来返回这个计数器
    const c = () => { // 定义一个函数，逻辑和前面例子的一样
      c.count++;
    };
    c.count = 0; // 再给这个函数添加一个count属性初始值为0
    return c; // 最后返回这个函数对象
  };
  const counter: Counter = getCounter(); // 通过getCounter函数得到这个计数器
  counter();
  console.log(counter.count); // 1
  counter();
  