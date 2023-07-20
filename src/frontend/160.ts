/**
 * @description 160 相交链表
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 导入链表节点
import { ListNode, createLinkedList } from "../linkList/ListNode";
// 可以将两个链表都遍历一遍，将节点存入数组，然后从后往前比较，找到最后一个相同的节点
// WA: 两个链表可能有相同的节点，但是不是相交的链表
//#region 
function getIntersectionNode1(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    // 定义两个数组
    let arrA: ListNode[] = [];
    let arrB: ListNode[] = [];
    arrA = MapList1(headA);
    arrB = MapList1(headB);
    // console.log(arrA, arrB);
    // 遍历这两个数组，找到最后一个相同的节点
    let lenA = arrA.length;
    let lenB = arrB.length;
    // 定义一个指针
    let p: number = 0;
    // 遍历
    while (lenA && lenB) {
        if (arrA[lenA - 1].val === arrB[lenB - 1].val) {
            p++;
            lenA--;
            lenB--;
        } else {
            break;
        }
    }
    console.log(p);

    // 返回结果
    return arrA[arrA.length - p] || null;
};

// 遍历链表
function MapList1(head: ListNode | null): ListNode[] {
    // 定义一个数组
    let arr: ListNode[] = [];
    // 定义一个指针
    let p: ListNode | null = head;
    // 遍历链表
    while (p) {
        arr.push(p);
        p = p.next;
    }
    return arr;
}
//#endregion

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) return null;
    // 双指针做法，当一圈绕完之后，交换指针，这样可以保证两个指针走过的路程相同
    // 定义两个指针
    let pA: ListNode | null = headA;
    let pB: ListNode | null = headB;
    // 遍历
    // 为什么pA和pB相遇的时候，判断不出来
    while (pA !== pB) {
        // 假如pA走完了，就让pA指向headB
        if (pA === null) {
            pA = headB;
        } else {
            pA = pA.next;
        }
        // 假如pB走完了，就让pB指向headA
        if (pB === null) {
            pB = headA;
        } else {
            pB = pB.next;
        }
    }
    return pA;
}

// test
let arrA = [4, 1, 8, 4, 5];
let arrB = [5, 0, 1, 8, 4, 5];
let heada = createLinkedList(arrA);
let headb = createLinkedList(arrB);
console.log(getIntersectionNode(heada, headb))