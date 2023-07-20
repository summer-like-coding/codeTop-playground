/**
 * @description 2 两数相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode|null}
 */

import { ListNode, createLinkedList } from "../linkList/ListNode";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // 设置两个指针
    let p1: ListNode = l1;
    let p2: ListNode = l2;
    // 设置一个新的链表
    let dummyNode = new ListNode(-1);
    let p3 = dummyNode;
    // 设置一个进位
    let carry = 0;
    let sum = 0;
    // 因为每个节点的值都是0-9，所以可以直接相加
    while (p1 !== null || p2 !== null) {
        // 和 = p1.val + p2.val + carry
        if (p1 !== null && p2 !== null) {
            sum = p1.val + p2.val + carry;
        } else if (p1 === null && p2 !== null) {
            sum = p2.val + carry;
        } else if (p1 !== null && p2 === null) {
            sum = p1.val + carry;
        }
        // 进位
        carry = Math.floor(sum / 10);
        // 新的节点,因为每个节点只能放一个值，所以取余
        let newNode = new ListNode(sum % 10);
        // 将新的节点放到新的链表中
        p3.next = newNode;
        // 移动指针
        p3 = p3.next;
        if (p1 !== null) {
            p1 = p1.next;
        }
        if (p2 !== null) {
            p2 = p2.next;
        }
    }
    // 如果最后还有进位，就将进位放到新的链表中
    if (carry === 1) {
        p3.next = new ListNode(carry);
    }
    return dummyNode.next;
};

// test
let arr1 = [2, 4, 3];
let arr2 = [5, 6, 4];
let l1 = createLinkedList(arr1);
let l2 = createLinkedList(arr2);
let res = addTwoNumbers(l1, l2);
console.log(res);