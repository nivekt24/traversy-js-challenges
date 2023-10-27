function titleCase(str) {
  const words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word and then adding on the rest of the letters to the work (+ words[i].slice(1))
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  //Join the array back into a string, each element has a space between it, and return it
  return words.join(' ');
}

module.exports = titleCase;
