//在nodejs中，最好使用commonjs
const fs = require("fs");

//对文件进行重命名
fs.rename("./test", "./yjm", (err) => {
  console.log("重命名的结果", err);
});
