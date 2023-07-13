/**
 * @description 94. 二叉树的中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */

import { TreeNode, constructorTree } from "../tree/TreeNode";
// 递归做法
function inorderTraversal1(root: TreeNode | null): number[] {
    // 递归终止条件
    if(root === null){
        return [];
    }
    let result: number[] = [];
    traverse(root, result);
    return result;
};

function traverse(root: TreeNode | null, result: number[]): void {
    // 递归终止条件
    if(root === null){
        return;
    }
    // 递归过程
    traverse(root.left, result);
    result.push(root.val)
    traverse(root.right, result);
}

// 迭代做法
// 中序遍历：先遍历左子树，再遍历根节点，最后遍历右子树
function inorderTraversal2(root: TreeNode | null): number[] {
    // 结果
    let result: number[] = [];
    // 辅助栈
    let stack: TreeNode[] = [];
    // 当前节点
    let curr: TreeNode | null = root;
    // 当前节点不为空或者栈不为空时，循环
    // 栈为空，说明，当前节点的左子树已经遍历完了，当前节点的右子树还没有遍历
    while(curr !== null || stack.length !== 0){
        // 当前节点不为空时，将当前节点入栈，当前节点指向左子树
        // 找出当前节点的最左子树
        while(curr !== null){
            stack.push(curr);
            curr = curr.left;
        }
        // 当前节点为空时，将栈顶元素出栈，将栈顶元素的值放入结果中，当前节点指向栈顶元素的右子树
        curr = stack.pop()!;
        result.push(curr.val);
        // 右子树
        curr = curr.right;
    }
    return result;
}

// 测试
let arr = [1,2,3,4,5,6,7];
let tree = constructorTree(arr);
console.log(inorderTraversal2(tree));