function solve([num1, num2, num3]) {
    let workDays = Number(num1);
    let dailyMoney = Number(num2);
    let dollarToLev = Number(num3);
    let monthlyIncome = workDays*dailyMoney;
    let bonus = 2.5*monthlyIncome;
    let yearlyIncomeLv = monthlyIncome*12+bonus;
    let tax = (25/100)*yearlyIncomeLv;
    let clearIncome = yearlyIncomeLv - tax;
    let clearIncomeLv = clearIncome*dollarToLev
    let dailyEarning = clearIncomeLv/365;
    console.log(dailyEarning.toFixed(2));
}

solve([21, 75.00, 1.59])