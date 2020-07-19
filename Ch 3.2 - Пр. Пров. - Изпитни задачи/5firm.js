function solve([num1, num2, num3]){
    let projectHours = Number(num1);
    let availableDays = Number(num2);
    let workers = Number(num3);
    

    let workDays = availableDays - availableDays * 0.10;
    let overtimeHours = workDays * 2 * workers;
    let workHours = workDays * workers * 8;
    let totalHours = Math.floor(workHours + overtimeHours)

    





    if (projectHours <= totalHours) {
        let hoursLeft = totalHours - projectHours;
        console.log(`Yes!${hoursLeft} hours left.`);
    } else {
        let hoursNeeded = projectHours - totalHours;
        console.log(`Not enough time!${hoursNeeded} hours needed.`)
    }
}

solve([ '90', '7', '3', '' ]

    )