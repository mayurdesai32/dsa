// in sort function
//  - 1 arg is 2nd ele and 2 arg is 1st ele
// - if - ve 1st arg will come 1st else come 2nd 
// [1,2,3,4,5,6]=(2,1)
// if(2-1) return 1

 class SimpleSort {
   constructor(arr) {
     this.arr = arr;
   }

   _helperfnAcesending = (arr1, arr2) => {
     return arr1 - arr2;
   };
   _helperfnDesending = (arr1, arr2) => {
     return arr2 - arr1;
   };

   ascending = () => this.arr.sort(this._helperfnAcesending);
   descending = () => this.arr.sort(this._helperfnDesending);
 }




module.exports = SimpleSort;
