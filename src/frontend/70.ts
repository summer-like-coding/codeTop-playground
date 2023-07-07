/**
 * @description 70 爬楼梯
 * @param {number} n
 * @return {number}
 */

function climbStairs(n: number): number {
    // 动态规划五部曲
    // 确认dp数组及下标含义
    // dp[i]表示爬到第i层楼梯的方法数
    let dp: number[] = new Array(n + 1)
    // 确定递推公式
    // dp[i] = dp[i - 1] + dp[i - 2]
    // 遍历顺序
    // 从前往后遍历
    for (let i = 1; i <= n; i++) {
        // 初始化dp数组
        if (i === 1) {
            dp[i] = 1
        } else if (i === 2) {
            dp[i] = 2
        } else {
            dp[i] = dp[i - 1] + dp[i - 2]
        }
    }
    return dp[n]
};