function solve([date]){
    let parts = date.split('-');
    date = new Date(parts[2], parts[1]-1, parts[0]);
    date.setDate(date.getDate() + 999);
    let printYear = date.getFullYear();
    let printMonth = '' + (date.getMonth()+1);
    let printDay = "" + date.getDate();

    if (printDay < 10){
        printDay = "0" + printDay;

    }
    if (printMonth < 10){
        printMonth = "0" + printMonth;
    }
    
    console.log(`${printDay}-${printMonth}-${printYear}`)
}

solve([ '25-02-1995' ])



