/**
 * @description 104 - Maximum Depth of Binary Tree
 * @param {TreeNode} root
 * @return {number}
 */

import { TreeNode } from "../tree/TreeNode";
// 最大深度 = 左子树最大深度和右子树最大深度的最大值 + 1
function maxDepth(root: TreeNode | null): number {
    // 采用后续遍历的方法
    if (root === null) return 0

    return traverse(root, 0)
}

function traverse(root: TreeNode | null, depth: number): number {
    if (root === null) return 0

    let left = traverse(root.left, depth + 1)
    let right = traverse(root.right, depth + 1)

    return Math.max(left, right) + 1
}
