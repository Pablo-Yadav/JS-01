//3rd
function remainingDays(date)
{
    let currentDate = new Date(date);
    let currentMonth = currentDate.getMonth();
    // return currentMonth;
    let nxtMonth = new Date(currentDate.getFullYear(), (currentMonth+1)%12, 1);
    // return nxtMonth - currentDate;
    return Math.floor((nxtMonth-currentDate)/(1000*60*60*24));
}