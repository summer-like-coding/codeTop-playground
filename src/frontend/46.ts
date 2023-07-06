/**
 * @description 全排列
 * @param {number[]} nums
 * @returns {number[][]}
 */
// 思路使用的是回溯
// 回溯三部曲
// 确定递归函数的参数和返回值
// 确定终止条件
// 单层递归逻辑
// 回溯函数一般都是没有返回值的

export function permute(nums: number[]): number[][] {
    // 设置结果
    let res: number[][] = []
    let len = nums.length
    let path: number[] = []
    backTracking(nums, res, len, path)
    return res
};

// 回溯
function backTracking(nums: number[], res: number[][], len: number, path: number[]) {
    // 终止条件，叶子节点
    if (path.length === len) {
        res.push([...path])
        return
    }
    // 单层递归逻辑
    for (let i = 0; i < len; i++) {
        // 不能取相同值
        if (path.includes(nums[i])) {
            continue
        }
        path.push(nums[i])
        backTracking(nums, res, len, path)
        path.pop()
    }
}

console.log(permute([1, 2, 3]));
