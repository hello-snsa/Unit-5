const { createSecureContext } = require("tls");

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function (head) {
    let crr = head;
    let p = null;
    let next = null;

    while (crr) {
        next = crr.next;
        crr.next = p;
        p = crr;
        crr = next;

    }

    let carry = 0;
    head = p;
    crr = head;
    crr.data += 1;
    while (crr && (crr.data > 9 || carry > 0)) {
        crr.data += carry;
        carry = parseInt(current.data / 10);
        crr = crr.next
    }
    if (carry) {
        let node = newLinkedListNode(1)
        crr = head;
        node.next = crr;
        head = node;
        return head

    }

    crr = head;
    p = null;
    next = null;
    while (crr) {
        next = crr.next;
        prev = crr;
        crr = next;

    }
    head = prev;
    return head;



    // sum=2314
    // head.data=sum+1;
    // head.next=null
    // return head

};

