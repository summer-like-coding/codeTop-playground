/**
 * @description 704 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {*}  {number}
 */
// 二分查找，查找是不是存在target
function search(nums: number[], target: number): number {
    // 设置左右指针，实现[left,right]效果
    let left = 0
    let right = nums.length-1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        console.log(mid);
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return -1
};

// 测试
let nums = [-1, 0, 3, 5, 9, 12]
let target = 9
console.log(search(nums, target))