/**
 * @description 5 最长回文子串
 * @param {string} s
 * @returns {string}
 */

export function longestPalindrome(s: string): string {
    // dp含义：dp[i][j]表示s[i...j]是否是回文串
    let dp: boolean[][] = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false))
    
    let res: string = "";
    // 从后往前遍历
    for (let i: number = s.length - 1; i >= 0; i--) {
        for (let j: number = i; j < s.length; j++) {
            if (s[i] === s[j]) {
                if (j - i <= 1) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }
        }
    }
    console.log(dp);
    
    // 遍历dp数组，找到最长的回文子串
    for (let i: number = 0; i < s.length; i++) {
        for (let j: number = i; j < s.length; j++) {
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
};

// 测试
let s: string = "cbbd"
console.log(longestPalindrome(s));