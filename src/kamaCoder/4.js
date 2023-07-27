/**
 * @description 计算a+b的值
 * 输入数据包括多组。
 * 每组数据一行,每行的第一个整数为整数的个数n(1 <= n <= 100), n为0的时候结束输入。
 * 接下来n个正整数,即需要求和的每个正整数。
 * @returns 输出求和的结果
 * @example
 * 输入示例：
 * 4 1 2 3 4
 * 5 1 2 3 4 5
 * 0
 * 输出示例：
 * 10
 * 15
 */

// node

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 设置和
let sum = 0;
rl.on('line', function (line) {
    // 将输入的字符串转换为数组
    let arr = line.split(' ').map((item) => parseInt(item));
    // 获取数组的第一个元素，即为n
    let n = arr[0];
    // 如果n为0，则结束输入
    if (n === 0) {
        rl.close();
    }else{
        // 计算和
        for (let i = 1; i <= n; i++) {
            sum += arr[i];
        }
        // 输出和
        console.log(sum);
        // 重置和
        sum = 0;
    }
});