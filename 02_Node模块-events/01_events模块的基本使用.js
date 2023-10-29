//1.events模块中的事件总线
const EventEmitter = require("events");

//2.创建EventEmitter的实例
const emitter = new EventEmitter();

//3.创建一个事件处理函数
function fn(data){
    console.log('我是一个事件处理函数',data);
}

//4.添加监听事件
emitter.on("event", fn);

//5.触发事件并且传递参数
emitter.emit("event","我是传递的参数");

//7.判断事件是否取消监听
emitter.on('removeListener',()=>{
    console.log('事件取消成功');
})

//6.取消事件监听
emitter.removeListener("event",fn);



