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