/**
 * @description 875 爱吃香蕉的珂珂
 * 需要在 H 小时内吃掉所有香蕉的最小速度 K，假如香蕉数量小于等于 K，那么可以全部吃掉
 * @param {number[]} piles
 * @param {number} H
 * @return {*}  {number}
 * 思路：
 * 其实这也是一道二分查找题目
 * 首先我们可以知道，最小速度一定是在 ceil(sum/h) 和 max(piles) 之间
 * 并且一定是递增的，所以可以使用二分查找
 * 我们只需要去判断时间是不是尽可能的大，因为如果时间足够，那么速度一定是越小越好
 */

function minEatingSpeed(piles: number[], h: number): number {
    // 计算左右边界
    let left = Math.ceil(piles.reduce((a, b) => a + b) / h);
    let right = Math.max(...piles);
    // 遍历
    while (left < right) {
        // 计算中间值
        let mid = Math.floor((left + right) / 2);
        // 计算当速度为 mid 时，需要的时间
        let times = calculateTimes(piles, mid);
        // 判断时间
        if(times > h) {
            // 时间不够，需要加速
            left = mid + 1;
        }else{
            // 时间够，可以减速
            right = mid;
        }
    }
    return left;
};

function calculateTimes(piles: number[], speed: number): number {
    // 每次只能吃一堆
    let times = 0;
    // 遍历
    for (let i = 0; i < piles.length; i++) {
        // 计算时间，必须向上取整
        times += Math.ceil(piles[i] / speed);
    }
    return times;
}

// 测试
console.log(minEatingSpeed([3,6,7,11], 8));