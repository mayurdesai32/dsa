// Stack dsa which work on principle FIFO

class MyQueueWithArray {
  item = [];
  enqueue(newItem) {
    this.item.push(newItem);
  }
  dequeue() {
    this.item.pop();
  }
  size() {
    return this.item.length;
  }
  isEmpty() {
    return this.size()===0
  }
  peek() {
     let noItem=this.size() -1

    return this.item[noItem];
  }
  print() {
console.log(this.item.toString())
  }
}

class MyQueue {
  front = 0;
  rear = 0;
  item = {};

  enqueue(newItem) {
this.item[this.rear]=newItem
  }
  dequeue() {
    this.item[this.front];
  }
  size() {
    return this.item.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    let noItem = this.size() - 1;

    return this.item[noItem];
  }
  print() {
    console.log(this.item.toString());
  }
}



module.exports = MyQueueWithArray;
