/**
 * @description 516 最长回文子序列
 * @param {string} s
 * @returns {number}
 */

function longestPalindromeSubseq(s: string): number {
    // 确定dp数组含义 dp[i][j]表示[i....j]的回文串的个数,但是在对角线的时候，都是1
    // 初始化
    let dp: number[][] = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0))
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = 1
    }
    // 确定遍历顺序.从下往上，从左往右
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) { // j = i+1,因为对角线都是1,初始化的时候已经赋值了
            // 判断是否相同
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
            }
        }
    }
    return dp[0][s.length - 1]
};

// 测试
console.log(longestPalindromeSubseq("bbbab"));
