//在nodejs中，最好使用commonjs
const fs = require("fs");

//有一段用户传递过来的内容
const content = "今天是2023-10-29";
//文件的写入操作                                    flag:'w'（默认就是w，会覆盖原有文件），如果为'a'，就是在原有的文件上追加
fs.writeFile("./ccc.txt", content, { encoding: "utf-8",flag:'a' }, function (err) {
  if (err) {
    console.log("文件写入错误", err);
  } else {
    console.log("写入成功");
  }
});
