let date = new Date();
function remainingDays(date1){
    var currentDate = date1;
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
  
    // Move to the next month
    var nextMonth = currentMonth + 1;
    var nextMonthDate = new Date(currentYear, nextMonth, 1);
  
    // Set the date to the previous day of the next month
    nextMonthDate.setDate(nextMonthDate.getDate() - 1);
  
    // Calculate the remaining days of the current month
    var remainingDays = nextMonthDate.getDate() - currentDate.getDate();
  
    return remainingDays;
}

console.log(remainingDays(date));