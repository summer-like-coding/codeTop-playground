/**
 * @description 102 二叉树的层序遍历
 * @param {TreeNode | null} root
 * @return {number[][]}
 */

import { TreeNode, constructorTree } from "../tree/TreeNode";
// 层序遍历，需要DFS，维护一个数组
function levelOrder(root: TreeNode | null): number[][] {
    // 将第一个元素压入队列
    let queue: TreeNode[] = []
    if (root) {
        queue.push(root)
    } else {
        return []
    }
    // 设置结果
    let res: number[][] = []
    while (queue.length !== 0) {
        // 设置一个数组，表示当前这一层的值
        let level: number[] = []
        // 获取这一层有多少个元素
        let size = queue.length;
        // 遍历
        for (let i = 0; i < size; i++) {
            // 每次从对头取元素
            let cur = queue.shift()
            // 将值放入数组
            level.push(cur.val)
            // 增加左右子节点
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }
        }
        // 循环完，放入数组
        res.push(level)
    }
    return res
};

// 测试
let arr = [3, 9, 20, null, null, 15, 7]
let tree = constructorTree(arr)
console.log(levelOrder(tree))