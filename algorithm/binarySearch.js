class BinarySearch {
  constructor(arr, guessNos) {
    this.sortedArr = arr.sort((a,b)=>a-b);
    this.guessNos = guessNos;
    this.startlimit = 0;
    this.endLimit = arr.length-1;
  }

run(){
    console.log("our guess no",  this.guessNos);
    while (true) {
if (
  this.guessNos === this.sortedArr[this.endLimit] 
) {
  console.log("1st guess", this.sortedArr[this.endLimit]);
  break
}

if (
  this.guessNos === this.sortedArr[this.startlimit]
) {
  console.log("2nd guess", this.sortedArr[this.startlimit]);
  break
}

if (
  this.guessNos > this.sortedArr[this.sortedArr.length-1]
) {
  console.log("more than ffff guess");
  break
}


if (
  this.guessNos > this.sortedArr[this.sortedArr.length-1]
) {
  console.log("more than ffff guess");
  break
}


// verify end

   
     
    //   
    }
        
}



  Limit = (no1,no2) => {
    let temp=no2-no1
   temp= Math.trunc(temp / 2);

   return Math.abs(temp) 

}

  // console.log()
}


module.exports=BinarySearch