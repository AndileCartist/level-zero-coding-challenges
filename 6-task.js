function getMax(number1, number2, number3) {
  const arr = [];
  let highestNum = null;
  for (let val of arguments) {
    arr.push(val);
  }
  for (let i = 0; i < arr.length; i++) {
    if (highestNum === null) {
      highestNum = arr[i];
    } else if (arr[i] > highestNum) {
      highestNum = arr[i];
    }
  }
  return highestNum;
}
