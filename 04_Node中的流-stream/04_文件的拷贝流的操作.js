const fs = require('fs');

//方式一：一次性读取和写入文件
fs.readFile('./ccc.txt',(err,data)=>{
    //将读取到的文件复制到ddd.txt
    fs.writeFile('./ddd.txt',data,err=>{
        console.log('写入成功');
    })
})

//方式二：可读流与可写流
const readStream = fs.createReadStream('./ccc.txt');
const writeStream = fs.createWriteStream('./ddd.txt');
readStream.on('data',(data)=>{
    writeStream.write(data);
})

readStream.on('end',()=>{
    writeStream.end();
})

//方式三：在可读流与可写流之间建立一个管道,然后直接将可读流独到的数据复制到可写流
const readStream1 = fs.createReadStream('./ccc.txt');
const writeStream1 = fs.createWriteStream('./eee.txt');
readStream1.pipe(writeStream1);