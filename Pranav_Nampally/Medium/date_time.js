// date problem

// Question: Write a JavaScript function that takes a date as input and returns the number of days remaining in the current month.

// For example, if the input date is June 15, 2023, the function should return 15, as there are 15 days remaining in the month of June.

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let currentDay = currentDate.getDate();
let daysInCurrentMonth = new Date(currentYear,currentMonth,0).getDate();
console.log("The number of remaining Days in this month: "+(daysInCurrentMonth - currentDay));
