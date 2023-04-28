function ListNode(x){
    this.val = x;
    this.next = null;
}


function ReverseList(pHead)
{
    if(pHead==null||pHead.next==null){
        return pHead;
    }
    let p1=null;
    let p2=null;
    while(pHead){
        p1=pHead.next;
        pHead.next=p2;
        p2=pHead;
        pHead=p1;
    }
    return p2;
}
function ReverseList1(pHead){
    if(pHead==null||pHead.next==null){
        return pHead;
    }
    let newhead= ReverseList1(pHead.next);
    pHead.next.next=pHead;
    pHead.next=null;
    return newhead;
}
module.exports = {
    ReverseList : ReverseList
};
const p =new ListNode(1);
const pp =new ListNode(2);
const ppp =new ListNode(3);
const pppp =new ListNode(4)
p.next=pp;
pp.next=ppp;
ppp.next=pppp;
console.log(p)
console.log(ReverseList1(p))