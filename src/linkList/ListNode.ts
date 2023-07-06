export class ListNode{
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }

}

export function createLinkedList(arr:number[]):ListNode {
    if (arr.length === 0) {
        return null
    }
    let head = new ListNode(arr[0])
    let current = head;
    for (let i = 1; i < arr.length; i++){
        current.next = new ListNode(arr[i])
        current = current.next
    }
    return head
}
export function printLinkedList(head: ListNode): number[]{
    let res:number[] = []
    let current = head;
    while (current !== null) {
        // console.log(current.val + "->")
        res.push(current.val)
        current = current.next
    }
    // console.log("Null")
    return res
}