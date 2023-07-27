/**
 * @description 计算a+b的值
 * @param 第一行是一个整数N，表示后面会有N行a和b，通过空格隔开。
 * @returns 输出a+b的值
 * @example
 * 输入示例：
 * 2
 * 1 2
 * 11 40
 * 输出示例：
 * 3
 * 51
 * 
 */

// tips：注意，测试数据不仅仅一组。也就是说，会持续输入N以及后面的a和b
// V8
while (line = readline()) {
    var N = parseInt(line);
    for (var i = 0; i < N; i++) {
        var lines = readline().split(' ');
        var a = parseInt(lines[0]);
        var b = parseInt(lines[1]);
        print(a + b);
    }
}
// Node
// 引入readline模块
let readline = require('readline');
// 创建接口
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 设置行数
let lineNum = 0;
// 监听
rl.on('line', function (line) {
    if(lineNum === 0){
        lineNum = parseInt(line);
    }else{
        let [a,b] = line.split(" ").map((item)=>parseInt(item))
        console.log(a+b)
    }
});