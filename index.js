// Your code here
function mapToNegativize(sourceArray) {
  let arr = []
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceArray[i] * -1)
  }
  return arr;
}

function mapToNoChange(sourceArray) {
  // let arr = [];
  // for (let i = 0; i < sourceArray.length; i++) {
  //   arr.push(sourceArray[i]);
  // }
  // return arr;
  return sourceArray;
}

function mapToDouble(sourceArray) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceArray[i] * 2);
  }
  return arr;
}

function mapToSquare(sourceArray) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceArray[i] ** 2);
  }
  return arr;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
    total += sourceArray[i];
  }
  return total;
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) {continue}
    return false;
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) {return true}
  }
  return false;
}

