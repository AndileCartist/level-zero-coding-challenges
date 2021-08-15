function getCommonLetters(str1, str2) {
  let common = [];
  [...str1].forEach((ltr) => {
    if (str2.indexOf(ltr) > -1) {
      common.push(ltr);
    }
  });
  console.log(`Common Letters: ${common.join(",")}`);
}
