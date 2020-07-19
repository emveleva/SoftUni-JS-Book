function solve([num1, num2]) {
    let l = Number(num1*100);
    let w = Number(num2*100);
    let rows = Math.trunc(l/120);
    let cols = Math.trunc((w-100)/70);
    let places = (rows*cols)-3;
    console.log(places);
}

solve([]);