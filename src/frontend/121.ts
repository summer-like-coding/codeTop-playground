/**
 * @description 121 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices: number[]): number {
    // 每次找出历史最低值
    // 目前最高利润 = max(maxProfit,price[i]-minPrice)
    // 最大利润值
    let maxProfits = 0
    // 历史最低值
    let minPrice = Number.MAX_VALUE
    // 遍历
    for (let i = 0; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i]
        }
        maxProfits = Math.max(maxProfits, prices[i] - minPrice)
    }
    return maxProfits
};

console.log(maxProfit([7,1,5,3,6,4]));
