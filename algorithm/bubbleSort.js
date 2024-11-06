// for searching algorithm:-BubbleSort
// ascending
//[22,44,1,33,45,777,5]-1st
//[22,1,44,33,45,777,5]-2nd
//[22,1,33,44,45,777,5]
//[22,1,33,44,45,777,5]
//[22,1,33,44,45,5,777]


//[1,22,44,33]





class BubbleSort {
  constructor(arr) {
    this.arr = arr;
  }

  ascending() {
    let arr1 = [...this.arr];
    console.log(arr1.length);
    for (let j = arr1.length; j > 0; j--) {
      console.log("new line", j);
      console.log(arr1);
      for (let i = 0; i < j - 1; i++) {
        if (arr1[i] > arr1[i + 1]) {
          let temp = arr1[i];
          arr1[i] = arr1[i + 1];
          arr1[i + 1] = temp;
        }
      }
    }

    return arr1;
  }

  ascendingOptimize() {
    let arr1 = [...this.arr];
    for (let j = arr1.length; j > 0; j--) {
      let noSwap = true;
      for (let i = 0; i < j - 1; i++) {
        if (arr1[i] > arr1[i + 1]) {
          let temp = arr1[i];
          arr1[i] = arr1[i + 1];
          arr1[i + 1] = temp;
          noSwap = false;
        }
      }
      if (noSwap) break;
    }

    return arr1;
  }

  descending() {
    let arr1 = [...this.arr];
    for (let i = arr1.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr1[j] < arr1[j + 1]) {
          let temp = arr1[j + 1];
          arr1[j + 1] = arr1[j];
          arr1[j] = temp;
        }
      }
    }

    return arr1;
  }

  descendingOptimize() {
    let arr2 = [...this.arr];
    for (let i = arr2.length; i > 0; i--) {
 let noSwap = true;
    for(let j=0;j<i-1;j++){

if(arr2[j]<arr2[j+1]){
  let temp = arr2[j];
  arr2[j]=arr2[j+1];
  arr2[j + 1]=temp;
    noSwap = false;
}
    }
    if(noSwap) break
      }
  
    return arr2;
  }
}

module.exports = BubbleSort;