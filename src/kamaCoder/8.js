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
    if (arr.length === groupNum) {
      // 计算平均数
      avg = arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
      arr.forEach((item) => {
        if (item > avg) {
          count += item - avg;
        }
      });
      console.log(count);
      console.log();
    } else {
      // 重置
      groupNum = 0;
      count = 0;
    }
  }
});

//#region
function getMinCount(arr) {
  // 双指针
  let left = 0;
  let right = arr.length - 1;
  // 移动次数
  let count = 0;
  while (left < right) {
    // 如果左边的积木高度小于平均高度，则用右边积木必须保证自己的高度大于平均高度
    if (arr[left] < avg) {
      let need = avg - arr[left];
      // 如果右边的积木高度大于平均高度，则右边积木高度减去平均高度，左边积木高度加上平均高度
      if (arr[right] - need > avg) {
        // 假如右边足够分need个(右边超过平均值)，那么左指针移动
        arr[right] -= need;
        arr[left] += need;
        count += need;
        left++;
      } else if (arr[right] - need < avg) {
        // 假如右边不足以分need个，那么只能多出移动多少,那么右指针移动
        let move = arr[right] - avg;
        arr[right] -= move;
        arr[left] += move;
        count += move;
        right--;
      } else {
        // 假如右边正好够分need个，那么左右指针都移动
        arr[right] -= need;
        arr[left] += need;
        count += need;
        left++;
        right--;
      }
    }
  }
  console.log(count);
}
//#endregion
