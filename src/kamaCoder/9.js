/**
 * @description 计算出个各位数为偶数的和
 * @param {number} num
 * @return {number}
 */

// 导入模块
const readline = require("readline");
// 创建接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 监听
rl.on("line", function (line) {
  let num = parseInt(line);
    getSum(num);
});

function getSum(num) {
  let sum = 0;
  let arr = num.toString().split("");
  arr.forEach((value) => {
    if (value % 2 === 0) {
      sum += parseInt(value);
    }
  });
  console.log(sum);
}
