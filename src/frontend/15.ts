/**
 * @description 15 三数之和
 * 判断数组中是否有三个数之和为0，有则返回所有的三个数
 * @param {number[]} nums
 * @return {*}  {number[][]}
 */
// 思路：回溯法，类似于求子集的问题, 但是会超时
// WA
//#region 
function threeSum1(nums: number[]): number[][] {
    // 可以使用回溯法，类似于求子集的问题
    const res: number[][] = [];
    // 子集
    let path: number[] = []
    // 传入一个startIndex，表示从哪个位置开始查找，因为需要去重
    let startIndex: number = 0;
    backtracking(nums, path, res, startIndex);
    // res会包含重复的数组，需要去重
    const set = new Set<string>();
    res.forEach(item => {
        set.add(item.sort().join(','));
    });
    // 将set转为数组
    let arr: number[][] = [];
    arr = Array.from(set).map(item => item.split(',').map(item => Number(item)))
    return arr;
};

function backtracking(nums: number[], path: number[], res: number[][], startIndex: number) {
    // 递归终止条件
    if (path.length === 3) {
        path.reduce((a, b) => a + b) === 0 && res.push([...path]);
    }
    // 遍历，从startIndex开始
    for (let i = startIndex; i < nums.length; i++) {
        path.push(nums[i]);
        backtracking(nums, path, res, i + 1);
        path.pop();
    }
    return res;
}
//#endregion

// 思路：排序 + 双指针
// 固定一个数，然后去寻找另外两个数，这样就转化为了两数之和的问题
export function threeSum(nums: number[]): number[][] {
    // 首先数组排序
    nums.sort((a, b) => a - b);
    // 遍历，固定numms[i]，用双指针去寻找另外两个数
    const res: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        // 固定nums[i]，然后去寻找另外两个数
        // 去重，如果前面的数和当前数相等，则跳过
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        getSumOfNum(nums, -nums[i], i + 1, res);        
    }
    return res;
}

function getSumOfNum(nums: number[], target: number, startIndex: number, res: number[][]) {
    // 只能从startIndex开始，因为需要去重
    // 使用双指针，在startIndex和nums.length-1之间寻找，两数之和为target的两个数
    let left: number = startIndex;
    let right: number = nums.length - 1;
    while (left < right) {
        // 类似于二分查找,因为数组是有序的
        if (nums[left] + nums[right] === target) {
            // 找到了，将结果放入res中
            res.push([-target, nums[left], nums[right]]);
            // 继续寻找
            left++;
            right--;
            // 这边为什么需要去重呢？
            // 因为在上面的循环中，left和right都是在变化的，所以可能会出现重复的情况
            // 去重
            while (left < right && nums[left] === nums[left - 1]) {
                left++;
            }
            // 去重
            while (left < right && nums[right] === nums[right + 1]) {
                right--;
            }
        } else if (nums[left] + nums[right] < target) {
            left++;
        } else {
            right--;
        }
    }
    return res;

}
// test
const res = threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]);
console.log(res); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]