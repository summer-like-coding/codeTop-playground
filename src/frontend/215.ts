/**
 * @description 215 数组中的第K个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {*}  {number}
 */
// 时间复杂度：O(nlogn)
// function findKthLargest(nums: number[], k: number): number {
//     return nums.sort((a,b)=>b-a)[k-1]
// };

export function findKthLargest(nums: number[], k: number): number {
    // 快排
    nums = quickSort(nums)
    return nums[nums.length - k]

}

// 快排
function quickSort(nums: number[]): number[] {
    // 递归结束条件
    if (nums.length <= 1) return nums
    // 选取基准值
    const pivot:number = nums[0]
    // 定义左右数组
    // 比基准值小的放左边，大的放右边
    let left: number[] = []
    let right: number[] = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    // 递归
    // 递归的结果是左数组+基准值+右数组
    return quickSort(left).concat(pivot, quickSort(right))
}
// 测试
let nums: number[] = [3,2,1,5,6,4]
let k: number = 2
console.log(findKthLargest(nums, k));