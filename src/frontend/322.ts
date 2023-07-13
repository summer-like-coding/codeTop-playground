/**
 * @description 322 零钱兑换
 * @param {number[]} coins
 * @param {number} amount
 * @return {*}  {number}
 */
// 返回硬币数，假设每种硬币数量无限
// 首先找出和为amount的序列，然后找出最短的序列
// 回溯法，暴力取出所有可能的序列，然后找出最短的序列，类似与组合问题
function coinChange1(coins: number[], amount: number): number {
    // 设置一个res，用于存储所有可能的结果
    // let res: number[][] = [];
    // 因为只要求出最短的序列，所以可以不用res，直接用一个变量存储最短的序列
    // 找出最短的序列
    let min: number = Infinity;
    // 设置一个path，用于存储每一种可能的结果
    let path: number[] = [];
    // 设置一个sum，用于存储path中的和
    let sum: number = 0;
    // 设置一个index，用于记录当前遍历到的节点
    let index: number = 0;
    // 因为coins可能是无序的，所以需要先排序，从大到小
    coins.sort((a, b) => b - a);

    function backtracking(path: number[], sum: number, index: number) {
        // 递归终止条件
        if (sum === amount) {
            min = Math.min(min, path.length);
            return;
        }
        // 遍历每一个节点
        for (let i = index; i < coins.length; i++) {
            // 剪枝
            if (sum + coins[i] > amount) {
                continue;
            }
            // 加上这个元素
            sum += coins[i];
            path.push(coins[i]);
            // 递归
            backtracking(path, sum, i);
            // 回溯
            sum -= coins[i];
            path.pop();
        }
    }

    // backtracking(coins, amount, res, path, sum, index);
    backtracking(path, sum, index);

    // 查找最短的序列
    // for (let i = 0; i < res.length; i++) {
    //     if (res[i].length < min) {
    //         min = res[i].length;
    //     }
    // }

    return min === Infinity ? -1 : min;
}
// 超时
//#region 
// function backtracking(coins: number[], amount: number, res: number[][], path: number[], sum: number, index: number): void {
//     // 递归终止条件
//     if (sum === amount) {
//         res.push([...path]);
//         return;
//     }
//     let len = coins.length;
//     // 遍历每一个节点
//     for (let i = index; i < len; i++) {
//         // 剪纸，假如当前和大于amount，就不需要再遍历了
//         if (sum + coins[i] > amount) {
//             continue;
//         }
//         sum += coins[i];
//         path.push(coins[i]);
//         // 递归
//         backtracking(coins, amount, res, path, sum, i);//为什么是i，因为可以重复取
//         // 回溯
//         sum -= coins[i];
//         path.pop();
//     }
// }
//#endregion

// 在本题中，所有暴力解法都会超时，所以需要用动态规划
// 一直拿最大的硬币，直到不能拿为止，然后再拿次大的硬币，直到不能拿为止，以此类推
// 动态规划五部曲：
// 1. 确定dp数组和含义
// dp[i],表示总金额为i时，最少的硬币数
// 2. 确定递推公式
// dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
// 3. dp数组初始化
// dp[0] = 0;
// 4. 确定遍历顺序
// 从前往后遍历
// 物品:硬币,背包:总金额
export function coinChange2(coins: number[], amount: number): number {
    // 设置dp数组
    let dp: number[] = new Array(amount + 1).fill(Infinity);
    // 设置dp数组初始化
    dp[0] = 0;
    // 设置遍历顺序
    // 组合问题,先遍历背包,再遍历物品
    // 为什么遍历背包，这是因为，我需要知道，总金额为i时，最少的硬币数
    for (let i = 1; i < dp.length; i++) {
        // 遍历物品
        for (let j = 0; j < coins.length; j++) {
            // 假如当前金额小于硬币面值,则跳过
            // 当前背包容量为i,当前物品为coins[j]，转不下的话，就不需要比较了
            if (i < coins[j]) {
                continue;
            }
            // 状态转移方程
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
    }
    console.log(dp);
    
    return dp[amount] === Infinity ? -1 : dp[amount];
}
// 测试
let coins: number[] = [1, 2, 5];
let amount: number = 11;
console.log(coinChange2(coins, amount));