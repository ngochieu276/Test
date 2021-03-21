const checkDoiXung = (word) => {
  const reverseWord = word.split("").reverse().join("");
  if (word == reverseWord) console.log(true);
  if (word !== reverseWord) console.log(false);
};
checkDoiXung("MADAM");
checkDoiXung("something");
