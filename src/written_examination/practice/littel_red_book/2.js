/**
 * @description 读取未给出行列数的矩阵
 * 给你一个n*m的矩阵，输入有n行，每行m个，将他转置后输出，输出m行，每行n个
 */

// 获取数组
let arr = [];
// 获取输入输出
// readline获取到的是字符串，需要转换成数字
while ((line = read_line()) != "") {
  //   获取数组
    arr.push(line.split(" ").map((item) => parseInt(item)));
}
// 设置行列数
let row = arr.length;
let col = arr[0].length;
// 转置
class Solution {
    // 转置
    traverse(arr){
        for(let i = 0; i < col; i++){
            for(let j = 0; j < row; j++){
                // 不带回车的输出
                printsth(arr[j][i] + " ");
            }
            // 换行
            printsth("\n");
        }
    }
}
let res;
let acmSolution = new Solution();
acmSolution.traverse(arr);
