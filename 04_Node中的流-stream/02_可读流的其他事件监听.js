const fs = require("fs");

//通过流读取文件
const readStream = fs.createReadStream("./aaa.txt", {
  start: 3,
  end: 10,
  // 对读取文件的字节进行精准控制
  highWaterMark: 3
});

//监听读取到的数据
readStream.on("data", (data) => {
  console.log(data.toString());
});

//补充其他的事件监听
readStream.on("open",(fd)=>{
    console.log('通过流将文件打开',fd);
})

readStream.on("end",()=>{
    console.log('文件读取结束');
})

readStream.on("close",()=>{
    console.log('文件读取结束并关闭');
})
