/**
 * @description 103 二叉树的锯齿形层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
import { TreeNode, constructorTree } from "../tree/TreeNode";
// 其实就是特殊的层序遍历，维护两个数组+一个标志位
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    // 设置一个队列，用来存储每一层的节点
    let queue: TreeNode[] = []
    // 设置一个flag，用于表示，正反
    let flag = false
    // 特殊情况
    if (root === null) {
        return []
    }
    // 将根节点入队
    queue.push(root)
    // 设置一个结果数组
    let res: number[][] = []
    // 开始遍历
    while (queue.length) {
        // 设置当前层的数组，和当前层数组长度
        let level: number[] = []
        let len = queue.length
        // 遍历当前层
        while (len--) {
            // 当前元素
            let cur = queue.shift()
            // 将当前元素的值放入当前层数组
            level.push(cur.val)
            // 如果当前元素有左右子树，将左右子树入队
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }
        }
        // 将当前层的元素放入结果数组
        if (flag) {
            level.reverse()
        } else {
            level = level
        }
        res.push(level)
        // 取反
        flag = !flag
    }
    return res
};

// test
let arr = [1, 2, 3, 4, null, null, 5]
let tree = constructorTree(arr)
console.log(zigzagLevelOrder(tree))