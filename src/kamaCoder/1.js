/**
 * @description 采用ACM模式，计算a+b的值
 * @param 输入两个数，用空格隔开
 * @returns 输出a+b的值
 * @example
 * 输入示例：
 * 1 2
 * 11 40
 * 输出示例：
 * 3
 * 51
 */

// 读取一行数据
while (line = readline()) {
    // 读取一行数据，按空格分割为数组
    var lines = line.split(' ');
    // 将字符串转换为数字
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    // 输出结果
    print(a + b);
}

// test
// 1 2
// 11 40
// 3
// 51