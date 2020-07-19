function solve(num1, num2, num3) {
    let b1 = Number(num1);
    let b2 = Number(num2);
    let h = Number(num3);
    let area = (b1 + b2) *h/2;
    console.log(area.toFixed(2));
}

solve(8, 13, 7)