const http = require("http");
const url = require("url");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 1.参数一: query类型参数
  // /home/list?offset=100&size=20
  // 1.1.解析url
  const urlString = req.url;
  console.log(urlString);
  const urlInfo = url.parse(urlString);
  console.log(urlInfo);

  res.end("hello world aaaa bbb");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功~");
});
