// 1.创建Buffer（编码）
const buf =Buffer.from('hello,你好啊')
console.log(buf);

//解码
const str = buf.toString();
console.log(str);

//手动指定Buffer创建过程的编码格式
const buf2 = Buffer.from('你好，世界', 'utf16le');
console.log(buf2);
//解码
console.log(buf2.toString('utf16le'));