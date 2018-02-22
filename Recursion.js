function rFibonacci(num){
    if(num<=1){
      return 1;
    }
    else{
      return rFib(num-1) + rFib(num-2);
    }
  }
  rFib(10);

//   ------------------------

function rBinarySearchTree(arr, num){
    var middle = Math.floor(arr.length/2);
    var newArr = arr;
    console.log(arr);
    console.log("array midpoint value: " + arr[middle]);
    
    if(arr[middle]>num){
      newArr = arr.slice(0, middle);
      return rBinarySearchTree(newArr, num);
    }
    else if(arr[middle]<num){
      newArr = arr.slice(middle+1, arr.length)
      return rBinarySearchTree(newArr, num);
    }
    else{
      return middle;
    }  
  }
  rBinarySearchTree([1,2,3,4,5,6,7,8,9,10], 4);