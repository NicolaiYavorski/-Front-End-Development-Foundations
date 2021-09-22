function runningAverage() {
    let sum = 0;
    let count = 0;

    function average(number) {
        count++;
        sum += number;

        let avg = sum / count;
        return avg;
    }

    return average;
}

function sum(number) {
    let currentSum = number;

    function nextSum(number1) {
      currentSum += number1;
      return nextSum;
    }
  
    nextSum.toString = function() {
      return currentSum;
    };

    return nextSum;
}

let rAvg = runningAverage();
console.log(rAvg(10));
console.log(rAvg(11));
console.log(rAvg(12));

console.log(sum(2, 3));
console.log(sum(2)(3));
console.log(sum(1)(2)(3)(4));
