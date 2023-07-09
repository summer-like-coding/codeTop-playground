/**
 * @description 912. 排序数组
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
function swap(a: number, b: number) {
    let temp = a;
    a = b;
    b = temp;
}
// 首先采用迭代法实现快排
//#region 
// export function sortArray(nums: number[]): number[] {
//     quickSort(nums, 0, nums.length - 1)
//     return nums
// };
// 迭代法实现快排
// function quickSort(nums: number[], begin: number, end: number): void {
//     // 递归终止条件
//     if (begin >= end) return
//     // 双指针
//     let left = begin
//     let right = end
//     // 基准值
//     let pivot = nums[left]
//     while (left < right) {
//         // 找到第一个比pivot小的元素
//         while (left < right && nums[right] >= pivot) {
//             right--
//         }
//         // 找到第一个比pivot大的元素
//         while (left < right && nums[left] <= pivot) {
//             left++
//         }
//         if (left < right) {
//             // 交换
//             [nums[left], nums[right]] = [nums[right], nums[left]]
//         }
//     }
//     // 基准值归位
//     nums[begin] = nums[left] // 或者 nums[right]
//     nums[left] = pivot
//     // 递归
//     quickSort(nums, begin, left - 1)
//     quickSort(nums, left + 1, end)
// }
//#endregion
// 递归版快排(超时)
//#region 
function quickSort(nums: number[]): number[] {
    // 确定结束条件
    if (nums.length <= 1) return nums
    // 单层递归逻辑
    // 维护两个数组
    // 设置基准值
    let pivot = nums[0]
    let left: number[] = []// 比基准值小的
    let right: number[] = []// 比基准值大的
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    // 递归
    let resLeft: number[] = quickSort(left)
    let resRight: number[] = quickSort(right)

    return [...resLeft, pivot, ...resRight]
}
//#endregion

// 优化版快排： 选择中间值作为基准值
//#region 
function quickSort1(nums: number[]): number[] {
    // 确定递归终止条件
    if (nums.length <= 1) return nums
    // 单层递归逻辑
    let left: number[] = []
    let right: number[] = []
    // 三数取中法
    let mid: number = Math.floor(nums.length / 2)
    let pivot: number = nums[mid]
    for (let i = 0; i < nums.length; i++) {
        if (i === mid) continue
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    // 递归
    let resLeft: number[] = quickSort1(left)
    let resRight: number[] = quickSort1(right)
    return [...resLeft, pivot, ...resRight]
}
//#endregion
// 优化版快排： 三数取中法
// 取首、中、尾三个数，并将它们按升序排序，将中间数作为基准值
export function quickSort2(nums: number[]): number[] {
    // 确定递归终止条件
    if (nums.length <= 1) return nums
    // 单层递归逻辑
    let left: number[] = []
    let right: number[] = []
    // 三数取中法
    let mid: number = Math.floor(nums.length / 2)
    let leftValue: number = nums[0]
    let midValue: number = nums[mid]
    let rightValue: number = nums[nums.length - 1]
    // 判断三个数的大小
    // 左边值大于中间值，交换。确保左边值小于中间值
    if (leftValue > midValue) {
        swap(leftValue, midValue)
    }
    // 左边值大于右边值，交换。确保左边值小于右边值
    if (leftValue > rightValue) {
        swap(leftValue, rightValue)
    }
    // 中间值大于右边值，交换。确保中间值小于右边值
    if (midValue > rightValue) {
        swap(midValue, rightValue)
    }
    console.log(nums);

    // 将中间数作为基准值
    let pivot: number = midValue
    for (let i = 0; i < nums.length; i++) {
        if (i === mid) continue
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    // 递归
    let resLeft: number[] = quickSort2(left)
    let resRight: number[] = quickSort2(right)
    return [...resLeft, pivot, ...resRight]
}
// 测试
let nums: number[] = [-2, 3, -5]
console.log(quickSort2(nums));