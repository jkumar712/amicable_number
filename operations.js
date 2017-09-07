let colors = require('chalk');

module.exports = function (number) {
  let array = [];
  let valueArray = [];
  let sumArray = [];
  let indices = [];
  let temp;
  for (let i=2; i<=number; i++) {
    for(let j=1; j<=i; j++) {
      if (i%j === 0 &&  j !== i) {
        array.push(j);
      }
    }
    // console.log(array);
    temp = array.reduce((prev, curr) => {
      return prev + curr;
    });
    // console.log(temp, i);
    valueArray.push(i);
    sumArray.push(temp);
    array = [];
  }
  for (i=0; i<valueArray.length; i++) {
    let val1 = valueArray[i];
    let val2 = sumArray[i];

    var idx = valueArray.indexOf(val2);
    while (idx < valueArray.length && idx >= 0) {
      indices.push(idx);
      idx = valueArray.indexOf(val2, idx + 1);
    }
    // console.log(indices);
    for (j=0; j<indices.length; j++) {
      if (sumArray[indices[j]] === val1 && valueArray[indices[j]] === val2 && val1 !== val2) {
        console.log(' ', '----', '', '----', ' ');
        console.log('|', colors.green(val1), '|', colors.cyan(val2), '|');
      }
    }
  }

  return sumArray;
}
