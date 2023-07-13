/**
 * @description 剑指 Offer 22. 链表中倒数第k个节点
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

import { ListNode } from "../linkList/ListNode"

// 方法一：可以先找到倒数第k个节点，然后再遍历一次链表，打印出来
function getKthFromEnd1(head: ListNode | null, k: number): ListNode | null {
    // 首先先获取链表长度
    let length = getLength(head)
    // 所以倒数第k个节点就是正数第length - k + 1个节点，因为节点从1开始计数
    let index = length - k + 1
    // 找到第index个节点
    for(let i = 1; i < index; i++) {
        head = head.next
    }
    // 打印第index个节点及其后面的节点
    return head
};

function getLength(head: ListNode | null): number {
    if(head === null) return 0
    let length = 0
    while(head !== null) {
        length++
        head = head.next
    }
    return length
}

// 方法二：快慢指针，之间间隔k个节点，当快指针到达链表尾部时，慢指针就是倒数第k个节点

function getKthFromEnd2(head: ListNode | null, k: number): ListNode | null {
    // 设置快慢指针
    let fast = head
    let slow = head
    // 快指针先走k步
    while(k > 0) {
        fast = fast.next
        k--
    }
    // 快慢指针一起走
    while(fast !== null) {
        fast = fast.next
        slow = slow.next
    }
    // 此时慢指针就是倒数第k个节点
    return slow
}