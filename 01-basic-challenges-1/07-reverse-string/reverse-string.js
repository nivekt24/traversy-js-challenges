// Solution 1
// const reverseString = (str) => str.split('').reverse('').join('');

// Solution 2
function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

module.exports = reverseString;
