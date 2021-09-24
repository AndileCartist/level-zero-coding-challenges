function getMax() {
  let highestNum = null;
  for (let i = 0; i < arguments.length; i++) {
    if (highestNum === null) {
      highestNum = arguments[i];
    } else if (arguments[i] > highestNum) {
      highestNum = arguments[i];
    }
  }
  return highestNum;
}
