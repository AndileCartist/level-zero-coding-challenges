function convertToHoursAndMin(num) {
  let isOver = num > 59,
    min = num % 60,
    minStatement = min > 1 ? `${min} minutes` : `${min} minute`;
  if (isOver) {
    let hours = Math.trunc(num / 60),
      hourStatement = hours > 1 ? `${hours} hours` : `${hours} hour`;
    return console.log(hourStatement, minStatement);
  } else {
    return console.log(`0 hour`, minStatement);
  }
}