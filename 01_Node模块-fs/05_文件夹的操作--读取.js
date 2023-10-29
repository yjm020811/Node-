//在nodejs中，最好使用commonjs
const fs = require("fs");

//读取文件夹
//1.读取文件夹，读取文件中的文件字符串
fs.readdir('./test',(err,files)=>{
    console.log(files);
})

//2.读取文件夹，获取文件夹中的文件信息
fs.readdir('./test',{withFileTypes:true},(err,files)=>{
    files.forEach((item)=>{
      if(item.isDirectory()){
        console.log('item是一个文件夹',item.name);
      }else {
        console.log('item是一个文件',item.name);
      }
    })
})