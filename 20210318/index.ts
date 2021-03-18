// as,问号以及感叹号
// as表示断言
// 断言有两种方式
// 一种括号
let nameValue : any = "xiaxiaofeng";
let nameLength : number = (nameValue).length;
// 另一种as
let nameValue1 : any = "xiaxiaofeng";
let nameLength1 : number = (nameValue as string).length;
// !与as都用于属性读取，但是！只能告知不可能为空值（null和undefined）,而as不限于此。
// 所以在读取属性为空值时！和as的用途是一致的

// ?用于属性定义
// 含义是，要么这个属性不存在，要么就必须符合定义的类型
// 例如
interface apiConfig {
    url?: string;
    method?: string;
}
function createApi(config: apiConfig) {
    if (config.url) {
        console.log(config)
    }
}

// 即使修改为undefined或者null也不会报错，因为可选属性定义类型，ts不会严格检查undefined