// date problem

// Question: Write a JavaScript function that takes a date as input and returns the number of days remaining in the current month.

// For example, if the input date is June 15, 2023, the function should return 15, as there are 15 days remaining in the month of June.

/* ----- For Today's Date -----------
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let currentDay = currentDate.getDate();
let daysInCurrentMonth = new Date(currentYear,currentMonth,0).getDate();
console.log("The number of remaining Days in this month: "+(daysInCurrentMonth - currentDay));
*/

let date= prompt("Enter the Date: ", "June 15, 2023");
let splitDate = date.split(",").map(s=>s.trim()).join(" ").split(" ");
if(splitDate.length!=3){
	console.log("Wrong Format of Date entered, Retry");
	throw "Wrong Format of Date entered, Retry";
}
else{
  let monthIndex={
    January:1,
    February:2, 
    March:3, 
    April:4, 
    May:5, 
    June:6, 
    July:7, 
    August:8, 
    September:9, 
    October:10, 
    November:11, 
    December:12,
  };
  let month = monthIndex[splitDate[0]];
  if(!month){
  	console.log("Month Name is Wrong, Retry");
		throw "Month Name is Wrong, Retry";
  }
  else{
    let day = +splitDate[1];
    let year = +splitDate[2];
    if(isNaN(day) || isNaN(year)){
      console.log("Day or Year entered is not a number, Retry");
      throw "Day or Year entered is not a number, Retry";
    }
    else{
      let daysInMonth= new Date(year,month,0).getDate();
      console.log("The number of remaining Days in this month: "+(daysInMonth - day));
    }
  }
}
