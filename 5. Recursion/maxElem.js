function maxElem(arr) {
  let copy = arr
  if (arr.length === 0) return null
  if (arr.length === 1) return arr[0]
  if (arr[0] < arr[1]) arr.splice(0,1)
  if (arr[0] > arr[1]) arr.splice(1,1)


  return Math.max(copy[0], maxElem(copy))
}

console.log(maxElem([]));
console.log(maxElem([1]));
console.log(maxElem([1,2]));
console.log(maxElem([1,2,3]));
console.log(maxElem([1,5,2,3,4]));
