function reverse(num) {
  if (num === 0) return 0
  const last = num % 10;
  const curr = (num - last) / 10
  console.log(last + '\n');
  return reverse(curr)
}

reverse(1)
reverse(12)
reverse(123)
reverse(3210)

