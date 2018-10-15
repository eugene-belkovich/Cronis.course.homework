function isPalindrom(string) {
  function reverse(string) {
    if (string.length === 0) return ''
    if (string.length === 1) return string
    return reverse(string[string.length-1]) + reverse(string.slice(0, string.length-1));
  }

  return string === reverse(string)
}




console.log(isPalindrom('a'));
console.log(isPalindrom('ab'));
console.log(isPalindrom('abc'));
console.log(isPalindrom('abbc'));
console.log(isPalindrom('abba'));
