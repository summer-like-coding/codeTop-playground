/**
 * @description 145. 二叉树的后序遍历
 * @param {TreeNode} root
 * @return {*}  {number[]}
 */

import { TreeNode, constructorTree } from "../tree/TreeNode";
// 递归
function postorderTraversal1(root: TreeNode | null): number[] {
    // 特殊情况
    if (root === null) return [];
    let res: number[] = [];
    traverse(root, res);
    return res;
};

function traverse(root: TreeNode, res: number[]): void {
    if (root === null) return;
    traverse(root.left, res);
    traverse(root.right, res);
    res.push(root.val);
}

// 迭代
// 使用一个栈来模拟递归的过程
// 后序遍历是左右中
function postorderTraversal2(root: TreeNode | null): number[] {
    // 特殊情况
    if (root === null) return [];
    // 设置一个栈
    let stack: TreeNode[] = [];
    // 设置一个结果数组
    let res: number[] = [];
    // 首先根节点入栈
    stack.push(root);
    // 设置cur
    let cur = root;
    // 当栈不为空
    while (stack.length !== 0) {
        // 将栈顶元素弹出
        cur = stack.pop()!;
        // 将栈顶元素的值放入结果数组中
        res.push(cur.val);
        // 如果栈顶元素有左子树
        if (cur.left !== null) {
            // 将左子树入栈
            stack.push(cur.left);
        }
        // 如果栈顶元素有右子树
        if (cur.right !== null) {
            // 将右子树入栈
            stack.push(cur.right);
        }

    }
    return res.reverse();
}

// test
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let tree = constructorTree(arr);
console.log(postorderTraversal2(tree));