/**
 * @description 415 字符串相加
 * @param {string} num1
 * @param {string} num2
 * @returns {string}
 */
// 可以使用模拟，模拟进行加法过程
function addStrings(num1: string, num2: string): string {
    // 首先全部反转
    let reverseNum1 = num1.split("").reverse()
    let reverseNum2 = num2.split("").reverse()
    let highBit = Math.max(reverseNum1.length, reverseNum2.length)
    let flag = 0
    let res = []
    for (let i = 0; i < highBit; i++) {
        // let sum = Number(reverseNum1[i])+Number(reverseNum2[i])
        let bit1 = 0
        let bit2 = 0
        if (i < reverseNum1.length) {
            bit1 = Number(reverseNum1[i])
        }
        if (i < reverseNum2.length) {
            bit2 = Number(reverseNum2[i])
        }
        let num: number = (bit1 + bit2) % 10
        let value = num + flag
        res.push(value % 10)
        flag = Math.floor((bit1 + bit2 + flag) / 10)
    }
    // res.push(flag)
    if (flag !== 0) {
        res.push(flag)
    }
    return res.reverse().join("")
};

console.log(addStrings("11", "77"));
