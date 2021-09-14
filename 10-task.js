function getCommonLetters(stringOne, stringTwo) {
  const common = [];
  [...stringOne].forEach((letter) => {
    if (stringTwo.indexOf(letter) > -1) {
      common.push(letter);
    }
  });
  console.log(`Common Letters: ${common.join(",")}`);
}
