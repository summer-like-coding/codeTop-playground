/**
 * @description 92 反转链表 II
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

import { ListNode, createLinkedList, printLinkedList } from "../linkList/ListNode";

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    // 特殊情况
    if (head === null) return null;
    let dummyNode = new ListNode(0)
    dummyNode.next = head
    let pre = dummyNode
    // 让pre指向left的前一个
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }
    // 找到last，last同样也是指向right的前一个
    let last = pre
    for (let i = 0; i < right - left + 1; i++) {
        last = last.next
    }
    // 如果last为空，说明反转的是链表的后半部分
    let LastNode = null
    if (last === null) {
        LastNode = null

    } else {
        LastNode = last.next;
        // 截断
        last.next = null;
    }
    let preNode = pre.next;
    // 截断
    pre.next = null;
    // 反转链表
    reverseLinkList(preNode);
    pre.next = last;
    preNode.next = LastNode;
    return dummyNode.next;
};

// 反转链表
function reverseLinkList(head: ListNode): ListNode {
    // 设置三个指针
    let pre: ListNode = null;
    let cur: ListNode = head;
    // 遍历链表
    while (cur !== null) {
        // 定义一个临时变量，next
        let next: ListNode = cur.next;
        // 反转链表
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

// 查找链表的第n个节点
function findNthNode(head: ListNode, n: number): ListNode {
    let i = 0;
    // 遍历链表
    while (i < n && head !== null) {
        head = head.next;
        i++;
    }
    // 找到了第n个节点前一个节点
    return head;
}


// test
let arr = [3, 5];
let arr2 = [1, 2, 3, 4, 5];
let head = createLinkedList(arr);
let res = reverseBetween(head, 1, 2);
console.log(printLinkedList(res));