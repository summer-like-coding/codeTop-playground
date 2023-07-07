/**
 * @description 647 回文子串
 * @param {string} s
 * @returns {number}
 */
// 判断回文子串的个数
export function countSubstrings(s: string): number {
    // dp含义：dp[i][j]表示s[i...j]是否是回文串
    // dp初始化
    let dp: boolean[][] = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false))
    // 遍历条件：i从后往前遍历，j从前往后遍历
    let res: number = 0;
    // 从后往前遍历，从前往后遍历
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            // 判断，假如s[i]===s[j]，则判断s[i+1...j-1]是否是回文串
            if (s[i] === s[j]) {
                if (j - i <= 1) {
                    dp[i][j] = true;
                    res++
                } else {
                    // dp[i][j] = dp[i + 1][j - 1];
                    if(dp[i + 1][j - 1]) {
                        dp[i][j] = true;
                        res++
                    }
                }
            }
        }
    }
    return res;
}

// 测试
let s: string = "abc"
console.log(countSubstrings(s));