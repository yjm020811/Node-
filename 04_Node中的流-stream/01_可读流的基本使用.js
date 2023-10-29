const fs = require("fs");

//1.一次性读取
//缺点一：没办法精准控制从哪里读取，读取什么位置
//缺点二：读取到某一个位置，暂停读取，恢复读取
//缺点三：文件非常大，无法多次读取
// fs.readFile('./aaa.txt',(err,data)=>{
//     console.log(data);
// })

//2.通过流读取文件
//创建一个可读流
// start:从什么位置开始 end ：从什么位置结束(包括end位置的字节)
const readStream = fs.createReadStream("./aaa.txt", {
  start: 3,
  end: 10,
  // 对读取文件的字节进行精准控制
  highWaterMark: 1
});

//可以通过监听data事件，获取读取到的数据；
readStream.on("data", (data) => {
  console.log(data.toString());
  //对读取文件的过程暂停
  readStream.pause();
  setTimeout(()=>{
    //0.1s对文件读取过程恢复，就形成了流失读取文件
    readStream.resume();
  },100)
});
