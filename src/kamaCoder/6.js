/**
 * @description 计算若干组a+b的值
 * 输入的第一行为一个整数N，接下来N行每行先输入一个整数M，然后在同一行内输入M个整数。
 * 对于每组输入，输出M个数的和，每组输出之间输出一个空行。
 * 但是多组之间不用输出空行。
 * @returns 输出M个数的和
 * @example
 * 输入示例：
 * 2
 * 4 1 2 3 4
 * 5 1 2 3 4 5
 * 输出示例：
 * 10
 *
 * 15
 *
 */

// node
// 引入
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let sum = 0;
let lineNum = 0;
rl.on("line", function (line) {
  // 获取数组
  let arr = line.split(" ").map((item) => parseInt(item));
//   假如个数为1，则为行数
    if (arr.length === 1) {
        lineNum = arr[0]; 
    }else{
        // 计算和
        arr.shift();
        sum = arr.reduce((pre,cur) => pre + cur,0);
        // 输出和
        console.log(sum);
        // 重置和
        sum = 0;  
        // 行数减一
        lineNum--;
        // 行数不为0时，输出空行
        if (lineNum !== 0) {
            console.log();
        }
    }
});
