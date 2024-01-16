function reverseWord(word) {
  let i = word.length - 1;
  let wordChecker = "";

  while (i >= 0) {
    let char = word[i];
    if (char !== " ") {
      wordChecker += char;
    } else {
      wordChecker += " ";
      wordChecker += char;
    }
    i--;
  }

  return wordChecker;
}

let word = "54321 89";
let result = reverseWord(word);
console.log(result);


