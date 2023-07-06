/**
 * 反转链表
 */

import { ListNode, createLinkedList, printLinkedList } from "../linkList/ListNode";

function reverseList(head: ListNode | null): ListNode | null {
    // 设置三个指针
    let pre = null
    let cur = head
    let next = null
    while(cur !== null){
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};

let arr = [1,2,3,4,5]
let link = createLinkedList(arr)
console.log(printLinkedList(reverseList(link)));


