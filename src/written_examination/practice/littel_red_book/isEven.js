/**
 * @description 判断一个数是否为偶数
 */

class Solution {
    // 判断是否为偶数，是返回1，不是返回0
    isEvenNum(n) {
        // TODO
        return n % 2 === 0 ? 1 : 0;
    }
}
let res;

let n = readInt();
let acmSolution = new Solution();
res = acmSolution.isEvenNum(n);
print(res);