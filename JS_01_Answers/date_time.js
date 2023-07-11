function date_time(){

    let currentDate = new Date();

    let currentMonth = currentDate.getMonth();

    let currentYear = currentDate.getFullYear();

    let currentDay = currentDate.getDate();

    let daysInCurrentMonth = new Date(currentYear,currentMonth,0).getDate();
    
    return(daysInCurrentMonth - currentDay);
}
