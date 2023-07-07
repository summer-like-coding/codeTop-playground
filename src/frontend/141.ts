/**
 * @description 141 环形链表
 * @param {ListNode | null} head
 * @return {boolean}
 */

import { ListNode } from "../linkList/ListNode";
// 基本思路：快慢指针，快指针一次走两步，慢指针一次走一步，如果有环，快慢指针一定会相遇
function hasCycle(head: ListNode | null): boolean {
    // 链表为空
    if (head === null) {
        return false;
    }
    // 设置两个指针
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    // 快指针一次走两步，慢指针一次走一步
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow!.next;
        // 快慢指针相遇，说明有环
        if (fast === slow) {
            return true;
        }
    }
    // 快指针走到头了，说明没有环
    return false;
}