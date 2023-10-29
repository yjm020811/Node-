//在nodejs中，最好使用commonjs
const fs = require("fs");

//1.同步读取
const res1 = fs.readFileSync("./abc.txt", {
  encoding: "utf8"
});
console.log(res1);
//2.异步读取（容易产生回调地狱）
fs.readFile(
  "./abc.txt",
  {
    encoding: "utf8"
  },
  (err, data) => {
    if (err) {
      console.log("读取文件错误", err);
    } else {
      console.log("读取文件的结果", data);
    }
  }
);

//3.异步读取：promise
fs.promises
  .readFile("./abc.txt", {
    encoding: "utf8"
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
