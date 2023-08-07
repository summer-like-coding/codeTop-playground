/**
 * @description 小红刷小红书
 * 小红在下午5点之后才会开始刷小红书，且一定会在凌晨3点前睡觉
 * 输入14行字符串，每两行代表一天的开始时间和结束时间。
 */

// 获取输入，因为有多行，所以设置一个数组来存储
let arr = [];
while ((line = read_line() != "")) {
  // 读取一行数据
  arr.push(line);
}

// 总共时间
let time = 0;

class Time {
  getTimeDiff(arr) {
    for (let i = 0; i < arr.length; i += 2) {
      // 获取开始时间和结束时间
      let start = arr[i];
      let end = arr[i + 1];
      // 计算时间差
      let diff = this.getDiff(start, end);
      // 累加时间差
      time += diff;
    }
    // 输出结果
    console.log(time);
  }
  getDiff(start, end) {
    // 首先将两个字符串，按照:分割成数组
    let startArr = start.split(":").map((item) => parseInt(item));
    let endArr = end.split(":").map((item) => parseInt(item));
    // 计算时间差
    // 如果endArr[0] < startArr[0]，说明跨天了，需要加上24小时
    if (endArr[0] < startArr[0]) {
      return (endArr[0] + 24 - startArr[0]) * 60 + endArr[1] - startArr[1];
    } else {
      return (endArr[0] - startArr[0]) * 60 + endArr[1] - startArr[1];
    }
  }
}

// test
let arr1 = [
  "20:00",
  "21:00",
  "20:00",
  "23:30",
  "21:00",
  "02:00",
  "00:12",
  "00:30",
  "18:30",
  "19:00",
  "23:00",
  "23:05",
  "18:00",
  "01:00",
];
let t = new Time();
t.getTimeDiff(arr);
