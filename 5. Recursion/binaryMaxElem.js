function maxElem(arr) {
  return _maxElem(arr, 0, arr.length)
}

function _maxElem(arr, start, end) {
  if (end < start) return null
  if (arr === undefined) return null
  if (arr.length === 0) return null
  if (arr.length === 1) return arr[0]

  let middle = Math.round(start + end / 2)
  let left = arr.slice(start,middle)
  let right = arr.slice(middle, end)

  return Math.max(_maxElem(left, start, left.length), _maxElem(right, start, right.length))
}

console.log(maxElem([]));
console.log(maxElem([1]));
console.log(maxElem([1,2]));
console.log(maxElem([1,2,3]));
console.log(maxElem([1,2,3,4]));
console.log(maxElem([1,5,2,3,4]));
