/**
 * @description 236 二叉树的最近公共祖先
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode | null}
 */
import { TreeNode, constructorTree } from "../tree/TreeNode";
// 找到p和q的最近公共祖先
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(root === null){
        return null
    }
    // 递归终止条件
    if(root.val === p.val || root.val === q.val){
        return root
    }
    // 遍历左右子树
    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right,p,q)
    console.log(left,right);
    
    // 如果左右子树都不为空,说明p和q分别在左右子树中,那么root就是最近公共祖先
    if(left !== null && right !== null){
        return root
    }
    // 如果左子树为空,说明p和q都在右子树中,那么返回右子树的最近公共祖先
    if(left === null){
        return right
    }
    // 如果右子树为空,说明p和q都在左子树中,那么返回左子树的最近公共祖先
    if(right === null){
        return left
    }
    return null
};

// test
let arr = [3,5,1,6,2,0,8,null,null,7,4]
let tree = constructorTree(arr)
let p = new TreeNode(5)
let q = new TreeNode(4)
console.log(lowestCommonAncestor(tree,p,q))