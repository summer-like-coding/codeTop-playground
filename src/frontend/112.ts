/**
 * @description 路径总和
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
import { TreeNode, constructorTree } from "../tree/TreeNode";
// 判断这个数上是不是存在一条路，满足sum = targetSum
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    let sum = 0
    let res = false
    // 遍历函数
    function traverse(root: TreeNode, sum: number) {
        if (root === null) {
            return
        }
        sum += root.val

        traverse(root.left, sum)
                // 中间进行操作
                if (root.left === null && root.right === null) {
                    if (sum === targetSum) {
                        res = true
                    }
                }
        traverse(root.right, sum)
    }
    traverse(root, sum)
    return res
};

// 测试
let arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]
let tree = constructorTree(arr)
console.log(hasPathSum(tree, 22))