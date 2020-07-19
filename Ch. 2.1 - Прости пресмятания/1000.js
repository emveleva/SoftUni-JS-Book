function calculateDates([arg1]){
    let input = arg1;
    let inputArray = input.split('-');
    let dd = inputArray[0];
    let mm = inputArray[1];
    let yyyy = inputArray[2];
    
    let inputFormat = yyyy + "," + mm + "," + dd;
    
    let inputDate = new Date(inputFormat);
    
    let newDate = new Date(inputDate.setDate(inputDate.getDate() + 1000)); 
    dd = newDate.getDate();
    if(dd < 10){
        dd = "0" + dd;
    }
    mm = newDate.getMonth() + 1;
    if(mm < 10){
        mm = "0" + mm;
    }
    console.log(dd + "-" + mm + "-" + newDate.getFullYear());
}