/**
 * @description 21 合并两个有序链表
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {*}  {ListNode}
 */

import { ListNode, createLinkedList } from "../linkList/ListNode"

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // 使用双指针，分别表示p1和p2
    let p1 = list1
    let p2 = list2
    let dummyHead = new ListNode(null)
    // let p3 = new ListNode(null)
    let p3 = dummyHead
    while (p1 !== null && p2 !== null) {
        // 判断两节点大小
        if (p1.val < p2.val) {
            p3.next = p1
            p1 = p1.next
        } else {
            p3.next = p2
            p2 = p2.next
        }
        p3 = p3.next
    }
    // 这时候p1或者p2到达终点
    // p1没到达重点
    if (p1 !== null) {
        p3.next = p1
    } else {
        p3.next = p2
    }
    
    return dummyHead.next
};

// 测试
let arr1 = [1, 2, 4]
let arr2 = [1, 3, 4]
let list1 = createLinkedList(arr1)
let list2 = createLinkedList(arr2)
console.log(mergeTwoLists(list1, list2))