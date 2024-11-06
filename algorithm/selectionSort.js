// SelectionSort

class SelectionSort {
  constructor(arr) {
    this.arr = arr;
  }

  ascending() {
    let arr2 = [...this.arr];
    for (let i = 0; i < arr2.length; i++) {
      let lowestvalue = i;
      for (let j = i; j < arr2.length; j++) {
        if (arr2[j] < arr2[lowestvalue]) {
          lowestvalue = j;
        }
      }
      if (i !== lowestvalue) {
        [arr2[lowestvalue], arr2[i]] = [arr2[i], arr2[lowestvalue]];
      }
    }
    return arr2;
  }

  descending() {
    let arr2 = [...this.arr];
    for (let i = 0; i < arr2.length; i++) {
      let lowestvalue = i;
      for (let j = i; j < arr2.length; j++) {
        if (arr2[j] > arr2[lowestvalue]) {
          lowestvalue = j;
        }
      }
      if (i !== lowestvalue) {
        [arr2[lowestvalue], arr2[i]] = [arr2[i], arr2[lowestvalue]];
      }
    }
    return arr2;
  }
}

module.exports = SelectionSort;
