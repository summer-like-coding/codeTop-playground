/**
 * @description 最大子序和
 * @param {number[]} nums
 * @returns {number}
 */
// 本题只需要返回最大值即可
// 双指针，滑动窗口
export function maxSubArray(nums: number[]): number {
    let sum = 0;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
