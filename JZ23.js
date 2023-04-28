function ListNode(x){
    this.val = x;
    this.next = null;
}

function EntryNodeOfLoop1(pHead){
    let set = new Set();
    while(pHead){
        if(set.has(pHead))return pHead;
        set.add(pHead);
        pHead=pHead.next;
    }
    return null;
}
function EntryNodeOfLoop2(pHead){
    let turtle = pHead;
    let rabbit = pHead;
    while(turtle!==null && rabbit!== null&&rabbit.next!==null){
            turtle=turtle.next;
            rabbit=rabbit.next.next;
            if(turtle==rabbit){
                let rabbit=pHead;
                while(rabbit!=turtle){
                    rabbit=rabbit.next;
                    turtle=turtle.next;
                }
                return rabbit;
            }
    }
}
function EntryNodeOfLoop(pHead)
{
   while(pHead){
    if(pHead.flag)
        return pHead;
    else{
        pHead.flag=true;
        pHead=pHead.next;
    }

}
return null;
}
module.exports = {
    EntryNodeOfLoop1 : EntryNodeOfLoop1
};
a = new ListNode(1);
b = new ListNode(2);
c = new  ListNode(3);
a.next=b;
b.next=c;
c.next=b;

console.log( EntryNodeOfLoop1(a))
console.log( EntryNodeOfLoop2(a))
console.log( EntryNodeOfLoop(a))


