function rec(num){
  if(num >= 0 && num <= 9) return num

  const last = num % 10
  const curr = (num - last) / 10
  return last + rec(curr)
}

console.log(rec(1))
console.log(rec(12))
console.log(rec(123))
console.log(rec(1234))

