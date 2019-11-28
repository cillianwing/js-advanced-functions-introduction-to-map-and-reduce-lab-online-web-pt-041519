// Your code here
function mapToNegativize(sourceArray) {
  let arr = []
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceArray[i] * -1)
  }
  return arr;
}