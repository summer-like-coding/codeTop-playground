/**
 * @description 144. 二叉树的前序遍历
 * @param {TreeNode} root
 * @return {*}  {number[]}
 */

import { TreeNode, constructorTree } from "../tree/TreeNode";
// 递归做法
function preorderTraversal1(root: TreeNode | null): number[] {
    // 特殊情况
    if (root === null) return [];
    let res: number[] = [];
    traverse(root, res);
    return res;
};

function traverse(root: TreeNode, res: number[]): void {
    if (root === null) return;
    res.push(root.val);
    traverse(root.left, res);
    traverse(root.right, res);
}
// 迭代法
// 其实就是模拟递归的过程，用栈来模拟
function preorderTraversal2(root: TreeNode | null): number[] {
    // 设置一个栈，用于模拟递归的过程
    let stack: TreeNode[] = [];
    // 设置一个结果数组
    let res: number[] = [];
    if (root === null) return res;
    // 中左右，所以先把根节点放入栈中
    stack.push(root);
    while (stack.length !== 0) {
        // 获取栈顶元素
        let cur = stack.pop()!;
        // 把栈顶元素的值放入结果数组中
        res.push(cur.val);
        // 因为是前序遍历，所以先把右子树放入栈中
        if (cur.right !== null) stack.push(cur.right);
        // 再把左子树放入栈中
        if (cur.left !== null) stack.push(cur.left);

    }
    return res;
}

// test
let arr = [1, 4, 3, 2]
let tree = constructorTree(arr);
console.log(preorderTraversal2(tree));