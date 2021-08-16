function convertToHoursAndMin(num) {
  let isOver = num > 59,
    min = num % 60,
    minStatement = min === 1 ? `${min} minute` : `${min} minutes`;
  if (isOver) {
    let hours = Math.trunc(num / 60),
      hourStatement = hours > 1 ? `${hours} hours` : `${hours} hour`;
    console.log(hourStatement, minStatement);
  } else {
    console.log(`0 hours`, minStatement);
  }
}