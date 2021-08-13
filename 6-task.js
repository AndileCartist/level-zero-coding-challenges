function getMax(a, b, c) {
  let arr = [];
  let highestNum = 0;
  for (let val of arguments) {
    arr.push(val);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestNum) {
      highestNum = arr[i];
    }
  }
  return highestNum;
}
