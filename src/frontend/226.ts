/**
 * @description 226 翻转二叉树
 * @param {TreeNode|null} root
 * @return {TreeNode|null}
 */

import { TreeNode } from "../tree/TreeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
    // 递归终止条件
    if(root === null) {
        return null;
    }
    // 进行交换
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    // 递归
    invertTree(root.left);
    invertTree(root.right);

    return root;
};