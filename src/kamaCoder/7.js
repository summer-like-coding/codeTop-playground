/**
 * @description 平均绩点
 * 如果输入的大写字母都在集合｛A,B,C,D,F｝中，则输出对应的平均绩点，
 * 结果保留两位小数。否则，输出“Unknown”。
 * 规定A、B、C、D、F分别代表4分、3分、2分、1分、0分
 */

// node
// 引入
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// 设置平均值
let avg = 0;
// 设置一个Map，用来存储字母和分数的对应关系
let map = new Map();
map.set('A',4);
map.set('B',3);
map.set('C',2);
map.set('D',1);
map.set('F',0);
// 获取数据
rl.on("line", function (line) {
    // 获取这一行的数组
    let arr = line.split(' ');
    // 计算平均值
    getAvg(arr);
});

function getAvg(arr){
    // 表示是否为正确的输入
    let flag = true;
    let sum = 0;
    arr.forEach((item) => {
        if(map.has(item)){
            sum += map.get(item);
        }else{
            flag = false;
            // 结束输入
            rl.close();
        }
    });
    if(flag){
        avg = (sum / arr.length).toFixed(2);
        console.log(avg);
    }else{
        console.log('Unknown');
    }  
}