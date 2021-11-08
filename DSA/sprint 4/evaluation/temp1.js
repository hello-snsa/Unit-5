function funSum(d1,d2){
        
    let temp=head;
    let n1=num(d1);
    let n2=num(d2);
    
    
    function num(data){
        let arr=[];
        
        while(temp.next!=null){
            arr.push(temp.data);
            
            temp=temp.next;
            
        }
        arr.push(temp.data);
        return arr;
    }
    n1=n1.join(" ");
    n2=n2.join(" ");
    
    n1=n1+n2;
    n1.split(" ").map(Number);
    
    temp=head;
    
    let i=0;
    while(temp.next!=null)
    temp.data=n1[i];
    i++;
    temp=temp.next;
    
    
}
while(i<n1.length){
    let node=new LinkedListNode(data);
    
    node.data=n1[i];
    node.next=temp.next;
    temp.next=node;
    i++;
    
}
    i++
}
return head;

}

console.log(sum)

return l1
};

