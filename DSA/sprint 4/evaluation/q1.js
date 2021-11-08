
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below
var addTwoNumbers = function (l1, l2) {

    let prev = null;
    let next = null;

    function fun(n) {
        let current = n;

        // let arr=[];
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;

        // console.log(head);
        return head;
    }


    let n2 = fun(l2);
    let n1 = fun(l1);
    let sum2 = Number(funSum(n2));
    let sum1 = Number(funSum(n1));
    let sum = +0;
    console.log(sum1)
    console.log(sum2)
    // sum = Number(sum1) + Number(sum2);
    // console.log(sum)


    function funSum(temp) {

        // console.log(temp)
        // let arr = [];
        let arr = '';

        while (temp.next != null) {
            // arr.push(temp.val);
            arr += temp.val;

            temp = temp.next;

        }
        arr += temp.val;
        // arr.push(temp.val);
        // console.log("arr", arr)
        return arr;


    }

    return l1;
}


