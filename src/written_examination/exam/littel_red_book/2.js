/**
 * @description 已知她生活中有n个事件，分享第i个事件需要她花费ti的时间和hi的精力来编辑文章，并能获得ai的快乐值。
 * 在总花费时间不超过T且总花费精力不超过H的前提下，小红最多可以获得多少快乐值
 */

// // 先获取输入，获取总事件数目
// let n = parseInt(read_line());
// // 获取T和H
// let [T, H] = read_line()
//   .split(" ")
//   .map((item) => parseInt(item));

// // 获取每个事件的信息
// let arr = [];
// while(line = read_line()) {
//   arr.push(line.split(" ").map((item) => parseInt(item)));
// }
// 设置快乐时间
let funTime = 0;
// 声明一个类
class Fun {
  // 排序arr，将arr按照快乐值从大到小排序[t,h,a]
  sortArr(arr) {
    arr.sort((a, b) => b[2] - a[2]);
  }
  // 获取快乐时间
  getFunTime(arr) {
    // 递归出口
    if (arr.length === 0) {
        return;
    }
    // 特殊情况，就是T和H都不够分配的情况
    if (T < arr[0][0] || H < arr[0][1]) {
        funTime += 0;
    } else if(T >= arr[0][0] && H >= arr[0][1]) {
      funTime += arr[0][2];
      T -= arr[0][0];
      H -= arr[0][1];
    }
    // 并将当前这个item删除
    arr.shift();
    // 递归调用
    this.getFunTime(arr);
  }
}

// test
let n = 2;
let T = 2;
let H = 2;
let arr = [
  [1, 3, 3],
  [3, 1, 4],
];

let fun = new Fun();
fun.sortArr(arr);
fun.getFunTime(arr);

console.log(funTime);
