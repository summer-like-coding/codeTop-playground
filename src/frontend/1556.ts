/**
 * @description 1556. 千位分隔数
 * 每三位加一个点号
 * @param {number} n
 * @return {*}  {string}
 */

function thousandSeparator(n: number): string {
    // 首先先将数字转换为数组
    let arr = n.toString().split('');
    // 特殊情况
    if (arr.length <= 3) return arr.join('');
    // 设置一个结果数组
    let res = [];
    // 每次减去三位，直到数组长度小于等于3
    while (arr.length > 3) {
        // 从后往前取三位
        let temp = arr.splice(-3);

        // 将取出的三位放入结果数组
        res.unshift(...temp);
        // 将取出的三位前面加上一个点号
        res.unshift('.');
    }
    // 将剩余的数字放入结果数组
    res.unshift(...arr);
    // 如果最后一位是点号，就删除
    if (res[0] === '.') res.shift();
    return res.join('');
}

// 测试
console.log(thousandSeparator(1234))