/**
 * @description 209 长度最小的子数组
 * @param {number} target
 * @param {number[]} nums
 * @return {*}  {number}
 */
// 我的思路：使用滑动窗口取匹配target，并且使用一个变量记录最小长度
function minSubArrayLen(target: number, nums: number[]): number {
    // 滑动窗口
    let left = 0, right = 0;
    // 记录最小长度
    let minLen = Infinity;
    // 记录当前窗口的和
    let sum = 0;
    // 遍历数组
    while (right < nums.length) {
        // 窗口右移
        sum += nums[right];
        right++;
        // 窗口左移
        while (sum >= target) {
            // 更新最小长度
            minLen = Math.min(minLen, right - left);
            // 窗口左移
            sum -= nums[left];
            left++;
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

// test
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2