/**
 * @description 1 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */

// 去查找是否存在一个值，和当前值的差值一样，但是需要去掉target=num+num的情况
function twoSum1(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        let index = nums.indexOf(diff)
        if (index !== -1 && index !== i) {
            return [i, index]
        }
    }
    return []
};

function twoSum(nums: number[], target: number): number[] {
    // 设置Map来进行存储
    let map = new Map()
    let arr =  nums.map((value, index) => {
        // 里面存的是差值
        let diff = target - value
        if (map.has(value)) {
            return [index, map.get(value)]
        } else {
            map.set(diff, index)
        }
    })
    return arr.filter(value => value !== undefined)[0]
};

console.log(twoSum([2, 7, 11, 15], 9));
