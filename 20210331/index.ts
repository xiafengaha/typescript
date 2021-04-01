// 高级类型
// 交叉类型
// 没搞懂


// 联合类型
// 简单例子
function getStr(label: string, value: string | number) {
    console.log(label, value)
}
console.log(getStr("hello world", 12))
// 返回类型，使用联合类型
interface initData {
    create();
    getData();
}
interface handleData {
    mounted();
    getData();
}
function getFun():initData | handleData {

}
console.log(getFun().getData()) // ok
console.log(getFun().create()) // error
// 索引类型
// 索引类型查询操作符（keyof）
// 索引访问操作符(T[K])
public initData() {
    interface P {
        name: string;
        age: number;
    };
    const people: P = {
        age: 18,
        name: "xiaxiaofeng"
    };
    const fn: <P,T extends keyof P>(p: P, t: T[]) => Array<P[T]> = (p, t) => {
        return t.map(item => p[item])
    }
    const res = fn(people, ["age"]);
}