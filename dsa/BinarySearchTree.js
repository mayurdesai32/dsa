class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if(!this.root){
this.root=newNode
return this
    }else{
        var current=this.root;
        while(true){
            if(value=== current.value) return undefined
            if (value < current.value) {
              if (current.left === null) {
                current.left = newNode;
                return this;
              } else {
                current = current.left;
              }
            }  
            if (value > current.value) {
              if (current.right === null) {
                current.right = newNode;
                return this;
              } else {
                current = current.right;
              }
            }
        }
    }

  }

  contain(value){
    if(this.root=== null) return false

    var current=this.root;
    var found=false;

    while(current && !found){
if (value < current.value) {
  current = current.left;
} else if (value > current.value) {
  current = current.right;
} else{
    found= true
}
    }
    
    return found
  }
}

const runBinarySearchTree = () => {
  // start
  // const bst = new BinarySearchTree();
  // bst.root= new Node("first")
  // bst.root.left = new Node("firstLess");
  // bst.root.right = new Node("firstMore");
  //  bst.root.left.left = new Node("firstLessLess");
  // bst.root.right.right = new Node("firstMoreMore");
  // console.log(bst)


   const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(13)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(4);
tree.insert(17);
tree.insert(1);
tree.insert(7);
tree.insert(14);
console.log(tree.contain(13))
console.log(tree.contain(12));
console.log(tree.contain(7));



//     10
//   5     13
// 3   7       15 
//1  4       14   17
console.log(tree)

};

module.exports = runBinarySearchTree;
