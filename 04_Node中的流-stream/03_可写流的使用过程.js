const fs = require('fs');

//1.一次性写入内容
// fs.writeFile('./bbb.txt','我是个帅哥',{
//     encoding:'utf-8',
//     // flag："a+"在文件末尾追加的意思
//     flag:'a+'
// },(err)=>{
//     console.log('写入文件成功',null);
// })

//2.创建一个写入流
const writeStream = fs.createWriteStream('./ccc.txt',{
    flags:"a+"
});

//写入文件
writeStream.write('我是个大帅哥\n',(err)=>{
    console.log('写入文件成功',err);
})

writeStream.on("close",()=>{
    console.log('文件被关闭');
})

//写入完成时，需要自己手动调用close方法去关闭
// writeStream.close()

// end方法：（一般用end，很少用close）
//操作一：将最后的内容写入到文件中，并且关闭文件
//操作二：关闭文件
writeStream.end("我是个帅哥")