/**
 * @description 283. 移动零
 * @param {number[]} nums
 * @return {void} 不需要你返回，并且必须原地修改输入数组
 */

function moveZeroes(nums: number[]): void {
    // 双指针，right指向非0，同时计算0的个数，后续在后面补上0
    let left = 0, right = 0, count = 0;
    while (right < nums.length) {
        if (nums[right] === 0) {
            count++;
        } else {
            nums[left] = nums[right];
            left++;
        }
        right++;
    }
    // 将后面的位置补上0
    while (count > 0) {
        nums[nums.length - count] = 0;
        count--;
    }
}