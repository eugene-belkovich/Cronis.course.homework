function rec(arr){
  if (!arr.length) return arr;
  return rec(arr.slice(1)).concat(arr[0]);
}

console.log(rec([]))
console.log(rec([1]))
console.log(rec([1,2]))
console.log(rec([1,2,3]))
