const BubbleSort = require("./bubbleSort");
const SelectionSort = require("./selectionSort");
const InsertionSort = require("./insertionSort");
const simpleSort = require("./simpleSort");
const BinarySearch = require("./binarySearch");

let arr=[56,45,66,11,22,1,0,33,44,23,43,44]
let sortedArr=[1,2,3,4,5,6,7,8,9,10,11,22,25,30,44,45,46,48,50,55]


const mainAlgo = () => {
// binary search

// const binarySearch = new BinarySearch(sortedArr, 44);

// console.log(binarySearch.run())


  // simpleSort
  // let newArr= new simpleSort(arr);
  // console.log("result",newArr.ascending())
  // console.log("result", newArr.descending());





  //BubbleSort

// let newArr = new BubbleSort(arr);
 
  // console.log( newArr.ascending());
    // console.log(newArr.ascendingOptimize());
//  console.log(newArr.descending());
//  console.log(newArr.descendingOptimize());

// SelectionSort

// const newSelection = new SelectionSort(arr);
// console.log(newSelection.ascending());
// console.log(newSelection.descending());

// InsertionSort

const newInsertionSort = new InsertionSort(arr);
// console.log(newInsertionSort.ascending());
console.log(newInsertionSort.descending());




// const helperFn=(arr,idx1,idx2)=>{
//    let temp=arr[idx1]
//     arr[idx1]=arr[idx2];
//     arr[idx1]=temp

// }
// console.log("initail",arr);
// helperFn(arr, 1, 2);

// console.log(arr)

};

module.exports = mainAlgo;
