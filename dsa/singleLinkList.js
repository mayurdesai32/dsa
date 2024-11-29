
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class SingleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length;
  }

  enqueue(newItem) {
let newNode =new Node(newItem)

if(! this.head){
   this.head = new Node(newItem);
   this.tail= this.head ;

// this.item[this.length] = newItem;
    this.length+=1
  }else{
    this.tail=newNode;
    this.tail.next=newNode
  }
}
}

module.exports = SingleLinkList;