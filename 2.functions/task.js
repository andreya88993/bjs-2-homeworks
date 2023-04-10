function getArrayParams(...arr) {
    let avg = 0; 
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    for (let arg of arr) {
      avg += (arg)/arr.length; 
    }
      let rez = parseFloat(avg.toFixed(2));
      return { min: min, max: max, avg: rez };
    }




    function summElementsWorker(...arr) {
      let sum = 0;
      for (let arg of arr) {// перебор значений массива и сложение их
      sum += arg
    }
      return sum;
    }
    
    console.log(summElementsWorker(0, 0, 0, -1, -100));
    
    function differenceMaxMinWorker(...arr) {
      
        if (!arr || arr.length === 0) {
        return 0;
      }
      let min = Math.min(...arr);
      let max = Math.max(...arr);
      difference = max - min;
      
      return difference;
    }
    console.log(differenceMaxMinWorker());
    
    function differenceEvenOddWorker(...arr) {
      let sumEvenElement = 0;
      let sumOddElement = 0;
      for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
        } else {
          sumOddElement += arr[i];
        }  
      }
     return sumEvenElement - sumOddElement;
    }
    
    console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35))
    
    function averageEvenElementsWorker(...arr) {
      if (!arr || arr.length === 0) {
        return 0;
      }
      let sumEvenElement = 0;
      let countEvenElement = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i]
          countEvenElement += 1;
        }
      }
      
        return sumEvenElement / countEvenElement;
    }


    const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
function makeWork (arrOfArr, func) {
  let maxWorkerResult = Math.min(...arrOfArr[0]);//-Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
  const result = func(...arrOfArr[i]);// добавляем спред в func
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  
  return maxWorkerResult;
}
