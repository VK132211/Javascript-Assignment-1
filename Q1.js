// 1. Write a program to find whether a given year is a leap year or not.
function leap(year) {
  if (year % 400 == 0) {
    console.log("Given year is a leap year");
  } else if (year % 100 == 0) {
    console.log("Given year is not a leap year");
  } else if (year % 4 == 0) {
    console.log("Given year is a leap year");
  } else {
    console.log("Given year is not a leap year");
  }
}
let year = 2024;
leap(year);
