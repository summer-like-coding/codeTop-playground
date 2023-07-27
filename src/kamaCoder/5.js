/**
 * @description 计算a+b的值
 * 输入包含若干行，每行输入两个整数a和b，由空格分隔。
 * 对于每组输入，输出a和b的和，每行输出后接一个空行。
 * @returns 输出a+b的和
 * @example
 * 输入示例：
 * 1 5
 * 10 20
 * 输出示例：
 * 6
 * 
 * 30
 * 
 */

// node
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 设置和
let sum = 0;
rl.on('line', function (line) {
    let [a,b] = line.split(' ').map((item) => parseInt(item));
    sum = a + b;
    console.log(sum);
    console.log();
});