/**
 * @description 在D天内送达包裹的能力
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 * 思路：二分查找
 * 首先我们需要知道题目含义：在D天内完成包裹的运输，且包裹顺序不能改变，求最少的运输能力，那么就是尽可能的将天数用掉，即运输能力最小，天数最
 * 那么既然要能够运输，那么我的运输能力一定是必须大于等于最大的包裹重量，即运输能力的下限是max(weights)，因为至少要保证，能够运
 * 那么运输能力的上限呢？我们可以假设运输能力的上限是sum(weights)，那么我们就可以知道，如果运输能力是sum(weights)，那么我们就可以在1天内完成运
 * 我们就知道了，答案其实就在[max(weights), sum(weights)]之间，那么我们就可以使用二分查找，来找到最小的运输能
 * 
 */

// 二分查找的特征：
// 1. 有序
// 2. 最优解在区间内


export function shipWithinDays(weights: number[], days: number): number {
    // 二分查找的左右边界
    let left = Math.max(...weights), right = weights.reduce((pre, cur) => pre + cur);
    // 二分查找
    while (left < right) {
        // 计算中间值
        let mid = Math.floor((left + right) / 2);
        // 计算当运输能力为mid时，需要的天数
        if (calculateDays(weights, mid) <= days) {
            // 如果计算出来，天数小于需要的天数，那么就说明运输能力大了，需要减小运输能力
            right = mid;
        } else if (calculateDays(weights, mid) > days) {
            // 如果计算出来，天数大于需要的天数，那么就说明运输能力小了，需要增加运输能力
            left = mid + 1;
        }
    };
    return left;
};

// 计算所需天数
function calculateDays(weights: number[], capacity: number): number {
    // 需要的天数
    let days = 1;
    // 当前包裹重量
    let curWeight = 0;
    // 快慢指针，计算天数
    let slow = 0, fast = 0;
    while (fast < weights.length) {
        // 计算当前包裹重量
        curWeight += weights[fast];
        if (curWeight > capacity) {
            // 如果当前包裹重量大于运输能力，那么就需要多一天
            days++;
            // 重置当前包裹重量
            curWeight = weights[fast];
            // 重置慢指针
            slow = fast;
        }
        fast++;
    }
    return days;
}

// 测试
let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5;
console.log(shipWithinDays(weights, days)); // 15