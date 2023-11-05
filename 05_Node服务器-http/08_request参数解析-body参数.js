const http = require('http')

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 获取参数: body参数
  req.setEncoding('utf-8')

  // request对象本质是上一个readable可读流
  req.on('data', (data) => {
    console.log(data);
  })

  req.on('end', () => {
      res.end('登录成功, 欢迎回来~')
  })
})


// 2.开启server服务器
server.listen(8000, () => {
  console.log('服务器开启成功~')
})
