/**
 * @description 129 求根到叶子节点数字之和
 * @param {TreeNode} root
 * @return {number}
 */

import { TreeNode, constructorTree } from "../tree/TreeNode";

function sumNumbers(root: TreeNode | null): number {
    // 结果
    let res = 0;
    let path: number[] = [];
    if (root === null) return res;
    // 遍历整个树
    function traverse(root: TreeNode, path: number[]) {
        path.push(root.val);
        // 递归终止条件,到达叶子节点
        if (root.left === null && root.right === null) {
            // 将path数组转换为数字
            let num = Number([...path].join(''));
            res += num;
        }
        if (root.left !== null) {
            traverse(root.left, path)
        }
        if (root.right !== null) {
            traverse(root.right, path)
        }
        path.pop();
    }
    traverse(root, path);
    return res;
};



// 测试
let arr = [1, 2, 3];
let tree = constructorTree(arr);
let res = sumNumbers(tree);
console.log(res);