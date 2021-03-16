// 接口
interface apiData { // 定义参数
    url: string;
    method: string;
}

function createApi(config: apiData) {
    // 做创建api的事情
}
let myApi = createApi({url: "https://github.com/xiafengaha", method: "get"});

// interfaceA extends interfaceB 接口扩展（继承）接口
// classA implements interfaceA 类实现接口
// interfaceB extends classB 接口继承类
// classA extends classB 类扩展类
// 当设计到继承的时候用extends
