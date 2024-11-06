class InsertionSort {
  constructor(arr) {
    this.arr = arr;
  }

  ascending() {
    let arr2 = [...this.arr];

    for (let i = 1; i < arr2.length; i++) {
      let currvalue = i;
      let lowerExist = true;

      for (let j = i - 1; j >= 0 && lowerExist; j--) {
        console.log("j", j);
        if (arr2[j] > arr2[currvalue]) {
          [arr2[j], arr2[currvalue]] = [arr2[currvalue], arr2[j]];
          currvalue = j;
        } else {
          lowerExist = false;
        }
      }
    }

    return arr2;
  }

  descending() {
    let arr2 = [...this.arr];

    for (let i = 1; i < arr2.length ; i++) {
      let currvalue = i;
      let lowerExist = true;
      
      for (let j = i - 1; j >= 0 ; j--) {
        if (arr2[j] < arr2[currvalue]) {
          [arr2[j], arr2[currvalue]] = [arr2[currvalue], arr2[j]];
          currvalue = j;
        } else {
          lowerExist = false;
        }
      }
    }

    return arr2;
  }
}

module.exports = InsertionSort;
