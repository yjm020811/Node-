//在nodejs中，最好使用commonjs
const fs = require("fs");

//创建文件夹
fs.mkdir("./test", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("创建文件夹成功");
});