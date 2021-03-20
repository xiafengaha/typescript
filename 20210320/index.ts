// ts中??和?的意思
// ??就是空值合并
// 举个例子
let i = undefined;
let k = i ?? 1
console.log(k) // 1
// 编译出来就是
// let i = undefined;
// let k = i !== null && i !== void 0 ? i : 1;
// console.log(k) // 1
// 其实上面还有另一种写法就是
// let k = i || 1; // 这样也能用，但是不严谨，如果i = 0呢
// ?存在不存在，可选
// 例如
let list = {
    item: [
        {
            a: 1
        }
    ]
}
if (list?.item?.length > 0) {
    console.log(list.item[0].a)
}
// 编译完之后就是
if (list && list.item && list.item.length > 0) {
    console.log(list.item[0].a)
}
// ?只能检查左侧，就是跟在谁后面检查谁，&&也可以，就是不严谨