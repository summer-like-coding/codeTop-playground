export class TreeNode{
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;
    constructor(val?:number, left?:TreeNode|null, right?:TreeNode|null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
export function constructorTree(nums: number[]):TreeNode {
    if (nums.length === 0) {
        return null
    }
    // 创建一个队列，队列里面是TreeNode类型
    const deque = new Array<TreeNode>()
    // 创建根节点
    const root = new TreeNode(nums[0])
    deque.push(root)
    let i = 1
    while (deque.length !== 0) {
        let cur = deque.shift()
        if (i < nums.length) {
            if (nums[i] !== null) {
                cur.left = new TreeNode(nums[i])
                deque.push(cur.left)
            }
            i++

        }
        if (i < nums.length) {
            if (nums[i] !== null) {
                cur.right = new TreeNode(nums[i])
                deque.push(cur.right)
            }
            i++
        }
        

    }
    return root
}

function levelTraverse(root: TreeNode | null) :number[]{
    if (root === null) {
        return []
    }
    let res: number[] = []
    let deque:TreeNode[]= []
    deque.push(root)
    
    while (deque.length !== 0) {
        let cur = deque.shift();
        if (cur.left !== null) {
            deque.push(cur.left);
        }
        if (cur.right !== null) {
            deque.push(cur.right)
        }
        res.push(cur.val);
    }
    return res
}
// console.log(levelTraverse(constructorTree([1,null,2,3])))