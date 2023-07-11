/**
 * @description 912. 排序数组
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
// function swap(a: number, b: number) {
//     let temp = a;
//     a = b;
//     b = temp;
// }
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
// function quickSort(nums: number[]): number[] {
//     // 确定结束条件
//     if (nums.length <= 1) return nums
//     // 单层递归逻辑
//     // 维护两个数组
//     // 设置基准值
//     let pivot = nums[0]
//     let left: number[] = []// 比基准值小的
//     let right: number[] = []// 比基准值大的
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] < pivot) {
//             left.push(nums[i])
//         } else {
//             right.push(nums[i])
//         }
//     }
//     // 递归
//     let resLeft: number[] = quickSort(left)
//     let resRight: number[] = quickSort(right)

//     return [...resLeft, pivot, ...resRight]
// }
//#endregion

// 优化版快排： 选择中间值作为基准值
//#region 
// function quickSort1(nums: number[]): number[] {
//     // 确定递归终止条件
//     if (nums.length <= 1) return nums
//     // 单层递归逻辑
//     let left: number[] = []
//     let right: number[] = []
//     // 三数取中法
//     let mid: number = Math.floor(nums.length / 2)
//     let pivot: number = nums[mid]
//     for (let i = 0; i < nums.length; i++) {
//         if (i === mid) continue
//         if (nums[i] < pivot) {
//             left.push(nums[i])
//         } else {
//             right.push(nums[i])
//         }
//     }
//     // 递归
//     let resLeft: number[] = quickSort1(left)
//     let resRight: number[] = quickSort1(right)
//     return [...resLeft, pivot, ...resRight]
// }
//#endregion

// 优化版快排： 三数取中法

//#region 
// 取首、中、尾三个数，并将它们按升序排序，将中间数作为基准值
export function quickSort2(nums: number[]): number[] {
    // 确定递归终止条件
    if (nums.length <= 1) return nums
    // 单层递归逻辑
    let left: number[] = []
    let right: number[] = []
    // 三数取中法
    let mid: number = Math.floor(nums.length / 2)
    // 判断三个数的大小
    // 左边值大于中间值，交换。确保左边值小于中间值
    if (nums[0] > nums[mid]) {
        [nums[0], nums[mid]] = [nums[mid], nums[0]] // 为什么这样可以改变原数组？ 交换的是数组的元素，而不是变量的值
    }
    // 左边值大于右边值，交换。确保左边值小于右边值
    if (nums[0] > nums[nums.length - 1]) {
        [nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]]
    }
    // 中间值大于右边值，交换。确保中间值小于右边值
    if (nums[mid] > nums[nums.length - 1]) {
        [nums[mid], nums[nums.length - 1]] = [nums[nums.length - 1], nums[mid]]
    }
    // console.log("quickSort2", nums);

    // 将中间数作为基准值
    let pivot: number = nums[mid]
    // console.log("quickSort2", pivot, mid);

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
//#endregion

// 优化版快排： 三数取中法 + 插入排序
export function sortArray(nums: number[]): number[] {
    quickSort(nums, 0, nums.length - 1);
    return nums;
}

function quickSort(nums: number[], left: number, right: number) {
    // 递归终止条件
    if (left >= right) {
        return;
    }
    // 三数取中
    let mid = Math.floor((left + right) / 2);
    if (nums[left] > nums[mid]) {
        // swap(nums[left], nums[mid]);
        [nums[left], nums[mid]] = [nums[mid], nums[left]];
    }
    if (nums[left] > nums[right]) {
        // swap(nums[left], nums[right]);
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    if (nums[mid] > nums[right]) {
        // swap(nums[mid], nums[right]);
        [nums[mid], nums[right]] = [nums[right], nums[mid]];
    }
    // 这时候中间值就是基准值
    let pivot = nums[mid];
    // 设置指针
    let start = left;
    let end = right;

    while (left < right) {
        // 从右向左找到第一个小于基准值的数
        while (left < right && nums[right] >= pivot) {
            right--;
        }
        // 从左往右找到第一个大于基准值的数
        while (left < right && nums[left] <= pivot) {
            left++;
        }
        // 将这两个数进行交换
        if (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
    }
    console.log("sortArray", nums);
    // 将基准值交换到中间点
    [nums[start], nums[left]] = [nums[left], nums[start]];
    // 递归处理左边的数组
    quickSort(nums, start, left - 1);
    // 递归处理右边的数组
    quickSort(nums, left + 1, end);
}

// 测试
const arr = [5,2,3,1]
console.log(sortArray(arr));
// console.log(quickSort2(arr));




// console.log(sortArray(arr)); 
