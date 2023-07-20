/**
 * @description 718 最长重复子数组
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 我的思路：遍历nums1，找到nums2中与nums1[i]相等的元素，然后向后遍历，找到最长的重复子数组
function findLength(nums1: number[], nums2: number[]): number {
    // 特殊情况
    if (nums1.length === 0 || nums2.length === 0) return 0;
    // 用来记录最长的重复子数组的长度
    let max = 0;
    // 遍历nums1
    for (let i = 0; i < nums1.length; i++) {
        // 遍历nums2
        for (let j = 0; j < nums2.length; j++) {
            // 如果找到了相等的元素
            if (nums1[i] === nums2[j]) {
                // 记录重复子数组的长度
                let len = 0;
                // 用来记录nums1和nums2的指针
                let p1 = i, p2 = j;
                // 向后遍历
                while (p1 < nums1.length && p2 < nums2.length) {
                    // 如果相等，len++
                    if (nums1[p1] === nums2[p2]) {
                        len++;
                    } else {
                        // 不相等，跳出循环
                        break;
                    }
                    // 指针后移
                    p1++;
                    p2++;
                }
                // 更新max
                max = Math.max(max, len);
            }
        }
    }
    return max;
};

// 测试用例
let nums1 = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
let nums2 = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
console.log(findLength(nums1, nums2)); // 3