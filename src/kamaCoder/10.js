/**
 * @description 小明每天的话费是1元，运营商做活动，手机每充值K元就可以获赠1元，一开始小明充值M元，问最多可以用多少天？ 注意赠送的话费也可以参与到奖励规则中
 * @param {number} M
 * @param {number} K
 * @return {number} 可以使用的天数
 * @example
 * 输入：2 2
 * 输出：3 充值两元，获赠一元，共三元，可以使用三天
 * 输入：13 3
 * 输出：19 
 * 为什么是19呢？因为13元充值，获赠4元，共17元，可以使用17天，但是第17天只能使用1元，所以是19天
 */

// 引入readline模块
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(line) {
    let [M,K] = line.split(' ').map(item => parseInt(item));
    getDays(M,K);
});

function getDays(M,K){
    // 设置使用天数，最少可以用M天
    let days = M;
    // 设置奖励
    let reward = Math.floor(M/K);
    // 设置剩下的钱
    let money = M%K;
    // 如果奖励大于0，就可以继续充值
    while(reward > 0){
        // 使用天数增加
        days += reward;
        // 剩下的钱 = 剩下的钱 + 奖励
        money += reward;
        // 计算新的奖励
        reward = Math.floor(money/K);
        // 计算剩下的钱
        money = money%K;
    }
    console.log(days);
}

getDays(13,3);