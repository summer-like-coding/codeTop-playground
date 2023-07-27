/**
 * @description 计算a+b的值
 * 输入包括两个正整数a,b(1 <= a, b <= 10^9),输入数据有多组, 如果输入为0,程序结束.
 * @returns 输出a+b的值
 * @example
 * 输入示例：
 * 1 5
 * 10 20
 * 0 0
 * 输出示例：
 * 6
 * 30
 */

// 建议使用JavaScript Node 模式来写

// 首先引入readline模块
let readline = require('readline');
// 创建接口
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    let [a,b] = line.split(" ").map((item)=>parseInt(item))
    if(a !== 0 || b !== 0){
        console.log(a+b)
    }
});