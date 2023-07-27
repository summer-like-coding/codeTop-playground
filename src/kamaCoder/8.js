/**
 * @description 8. 摆平积木
 * 每组测试样例包含一个正整数n，表示小明已经堆好的积木堆的个数。
 * 接着下一行是n个正整数，表示每一个积木堆的高度h，每块积木高度为1。其中1<=n<=50,1<=h<=100。
 * 当n=0时，输入结束。
 * @returns 输出一个整数，对于每一组数据，输出将积木堆变成相同高度需要移动的最少积木块的数量。
 * @example
 * 输入示例：
 * 5
 * 5 2 3 4 1
 * 0
 * 输出示例：
 * 5
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 设置平均数
let avg = 0;
// 设置移动次数
let count = 0;
// 组数
let groupNum = 0;
// 积木堆
let arr = [];

rl.on("line", function (line) {
  if (groupNum === 0) {
    groupNum = parseInt(line);
  } else {
    arr = line.split(" ").map((item) => parseInt(item));
    if (arr.length !== groupNum) {
      rl.close();
    }
    if (arr.length === 1 && arr[0] === 0) {
      rl.close();
    }
    // 计算平均数
    avg = arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
    // 将数组排序
    arr.sort((a, b) => a - b);
    getMoveCount(arr);
  }
});

function getMoveCount(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (arr[left] < avg) {
      // 计算最高位剩下多少
      let rightMore = arr[right] - avg;
      // 如果剩下的加上原来的还是小于等于平均值，那么right就减一
      // 如果大于平均值，那么就将只减去差值
      if (arr[left] + rightMore < avg) {
        arr[left] += rightMore;
        arr[right] -= rightMore;
        count += rightMore;
        right--;
      } else if (arr[left] + rightMore > avg) {
        let leftLess = avg - arr[left];
        arr[right] -= leftLess;
        arr[left] += leftLess;
        count += leftLess;
        left++;
        continue;
      } else {
        arr[left] += rightMore;
        arr[right] -= rightMore;
        count += rightMore;
        right--;
        left++;
        continue;
      }
    }
  }
  console.log(count);
}

// test
let test = [5, 2, 4, 1, 7, 5];
getMoveCount(test);
