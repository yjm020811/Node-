//在nodejs中，最好使用commonjs
const fs = require("fs");

//打开一个文件
fs.open("./bbb.txt", (err, fd) => {
  if (err) {
    console.log("打开文件错误", err);
    return;
  }
  //1.获取文件描述符
  console.log(fd);
  //2.读取文件的信息
  fs.fstat(fd, (err, stats) => {
    if (err) return;
    console.log(stats);
  });
  //手动关闭文件
    fs.close(fd, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("close success");
    });
});
