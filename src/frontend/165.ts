/**
 * @description 165 比较版本号
 * 从左到右的顺序依次比较它们的修订号，忽略前导零
 * @param {string} version1
 * @param {string} version2
 * @returns {number}
 */
// 进行划分，变为数组，然后进行比较Number
// WA,问题出在，如果长度不一致，NaN的情况怎么办的？
// 这时候我们就要看，最后那个是多少,如果比0大，那么就是它大
function compareVersion(version1: string, version2: string): number {
    // 设置数组1
    let version1Arr = version1.split(".")
    let version2Arr = version2.split(".")
    let len = Math.max(version1Arr.length, version2Arr.length)
    let index = 0
    while (index < len) {
        let num1 = 0
        if (index < version1Arr.length) {
            num1 = Number(version1Arr[index])
        }
        let num2 = 0
        if (index < version2Arr.length) {
            num2 = Number(version2Arr[index])
        }
        if (num1 > num2) {
            return 1
        } else if (num1 < num2) {
            return -1
        } else {
            index++
        }
    }
    return 0
};

console.log(compareVersion("1.0",
    "1.0.1"));
