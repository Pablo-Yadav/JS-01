function isLeapYear(year){
    if(year%4===0 && year%100!==0 || year%400===0){
        return true;
    }
    return false;
}
function remainingDaysInTheMonth(dateObj){
    const date=dateObj.getDate();
    const month=dateObj.getMonth();
    const year=dateObj.getFullYear();
    var leapYear={
        0:31,
        1:29,
        2:31,
        3:30,
        4:31,
        5:30,
        6:31,
        7:31,
        8:30,
        9:31,
        10:30,
        11:31,
    }
    var nonLeapYear={
        0:31,
        1:28,
        2:31,
        3:30,
        4:31,
        5:30,
        6:31,
        7:31,
        8:30,
        9:31,
        10:30,
        11:31,
    }
    if(isLeapYear(year)){
        return leapYear[month]-date;
    }else{
        return nonLeapYear[month]-date;
    }
}



