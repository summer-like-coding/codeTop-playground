/**
 * @description 88 合并两个有序数组 
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，
 * 另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 直接在nums1上进行修改
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {*}
 */
// 使用splice和sort
function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
    // 特殊情况
    if (n === 0) return;
    if (m === 0) {
        nums1 = nums2;
        return;
    }
    // 先添加再排序
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => a - b);
    return;
};

// 使用双指针做法
// 从大的开始比较，边排序边放入nums1
// 因为题目规定，nums1和nums2都是非递减顺序排列的
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // 特殊情况
    if (n === 0) return;
    // 双指针
    let p1 = m - 1, p2 = n - 1;
    // 设置一个index表示需要放入的位置
    let index = m + n - 1;
    // 从后往前遍历
    while (p1 >= 0 && p2 >= 0) {
        // 判断谁大谁小
        if (nums1[p1] > nums2[p2]) {
            // nums1大，放入nums1的最后面
            nums1[index] = nums1[p1];
            // p1指针前移
            p1--;
        } else if (nums1[p1] <= nums2[p2]) {
            // nums2大，放入nums1的最后面
            nums1[index] = nums2[p2];
            // p2指针前移
            p2--;
        }
        // index指针前移
        index--;
    }
    // 如果p2指针还没走完，说明nums2还有剩余，直接放入nums1的前面
    // while (p2 >= 0) {
    //     nums1[index] = nums2[p2];
    //     p2--;
    //     index--;
    // }

    // 不是循环
    if (p2 >= 0) {
        nums1.splice(0, index + 1, ...nums2.splice(0, p2 + 1))
    }
    return;
};
