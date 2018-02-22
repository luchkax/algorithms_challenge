function print1to255(){
    for(var i = 1; i < 256; i++){
      console.log(i);
    }
  }
  print1to255();
//   --------------------------

function printOdd1to1000(){
    for(var i = 1; i < 1000; i++){
      if(i % 2 !== 0){
        console.log(i);
      }
    }
  }
  printOdd1to1000();

//   ----------------------------

function printSumOdd(){
    var sum = 0;
    for(var i = 1; i < 1000; i++){
      if(i % 2 !== 0){
        sum+=i;
      }
    }
    return sum;
  }
  printSumOdd();

// ----------------------------------

function iterateThruArr(arr){
    for(var i = 0; i < arr.length; i++){
      console.log(arr[i]);
      }
    }
  iterateThruArr([1,2,3,4,5,5,5,5])

//   -------------------------------

function findMax(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
      if(max < arr[i]){
        max = arr[i];
      }
    }
    return max;
  }
  findMax([1,2,3,4,5,5,5,5])

//   ------------------------------

function findAvg(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
      sum+=arr[i];
      }
      return avg = sum / arr.length
    }
  findAvg([1,3,5,7,20])

// ------------------------------

function arrOdds(){
    var arr = [];
    for(var i = 1; i < 256; i++){
      if(i % 2 !== 0){
        arr.push(i);
      }
    }
    return arr;
  }
  
  arrOdds();

//   ----------------------------

function greaterY(arr, y){
    var counter = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > y){
        counter ++;
      }
    }
    return counter;
  }
  
  greaterY([1,23,4,56,7,6,5], 5);

// ------------------------

function squareNums(arr){
    for(var i = 0; i < arr.length; i++){
      arr[i] = arr[i] * arr[i];
      }
    return arr;
  }
  
  squareNums([1,23,4,56,7,6,5]);

// ------------------------

function removeNegatives(arr){
    for(var i = 0; i < arr.length; i++){
      if(arr[i] < 0){
        arr[i] = 0;
      }
    }
    return arr;
  }
  
  removeNegatives([1,23,4,56,7,6,5]);

//   /---------------------

function minMaxAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
      else if(arr[i] < min){
        min = arr[i];
      }
      sum+=arr[i];
    }
    var avg = sum / arr.length;
    return [min, max, avg];
  }
  
  minMaxAvg([1,23,4,56,7,6,5]);

// ---------------------------

function shiftArrRight(arr){
    var temp = arr[0];
    for(var i = 0; i < arr.length-1; i++){
      arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
    return arr;
  }
  shiftArrRight([1,2,3,4,5,6]);

// -----------------------------

function removeNeg(arr){
    for (var i = 0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
removeNeg([1,-2,34,-3,4])

// --------------------------------

function RandomArr(arr){
  var temp;
  for(var i = 0; i<arr.length; i++){
    var x = Math.floor(Math.random() * arr.length + 1);
    temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
  }
  return arr;
}

RandomArr([3,4,5,6,7,8,9]);
// ----------------------------------

function swap2val(arr){
    var temp;
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
  }
  swap2val([1,2,3,4,5,6]);

//   ----------------------------

function reverseArr(arr){
    var temp;
    var x = 1;
    for(var i = 0; i<arr.length/2; i++){
      temp = arr[i];
      arr[i] = arr[arr.length-x];
      arr[arr.length-x] = temp;
      x++
    }
    return arr;
  }
  reverseArr([1,2,3,4,5,6]);

//   ---------------------------

function insertYinX(arr,y,x){
  arr.push(y);
  var temp;
  for(var i=arr.length-1; i>x; i--){
    temp = arr[i]
    arr[i] = arr[i-1];
    arr[i-1] = temp;
  }
  return arr;
}

insertYinX([1,2,4,5],666666,1);

//   ----------------------------

function removeNeg(arr){
    var neg = 0;
    for(var i = 0; i<arr.length; i++){
      if(arr[i] < 0){
        neg++;
      }
      else{
        arr[i-neg] = arr[i];
      }
    }
    while(neg--){
      arr.pop()
    }
    return arr;
  }
  removeNeg([1,2,-3,4,-5,6,7]);
// ---------------------  

function iSum(num){
    var sum = 0
    for(var i=1; i<num; i++){
      sum+=num;
    }
    return sum
  }
  
  iSum(4)

//   ----------------------

function iFactorial(num){
    var x = 1;
    for(var i=1; i<=num; i++){
      x*=i;
    }
    return x;
  }
  
  iFactorial(5)

//   --------------------

function iFib(num){
  var a = 1; 
  var fib = 0;
  var temp;
  
  while(num>=0){
    temp = a;
    a = a+fib;
    fib = temp;
    num--;
  }
  return fib;
}

iFib(3);

// ------------------------


//   -----------------------

function iBinarySearchTree(arr, num){
    var middle = Math.floor(arr.length/2);
    var newArr = arr;
    for (var i = 0; i<middle; i++){
      if(arr[i] === num){
        console.log(i)
        return arr[i];
      }
    }
    for(var x = middle; x<arr.length; x++){
      if(arr[x] === num){
        console.log(x)
        return arr[x];
      }
      else{
        console.log(middle)
        return arr[middle];
      }
    }
  }
  iBinarySearchTree([1,2,3,4,5,6,7,8,9,10], 5);

//   --------------------------



