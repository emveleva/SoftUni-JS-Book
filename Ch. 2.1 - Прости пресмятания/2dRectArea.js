function solve([num1, num2, num3, num4]) {
    let x1 = parseFloat(num1);
    let y1 = parseFloat(num2);
    let x2 = parseFloat(num3);
    let y2 = parseFloat(num4);
    let width = Math.max(x1, x2) - Math.min(x1, x2);
    let height = Math.max(y1, y2) - Math.min(y1, y2);
    console.log(width*height);
    console.log(2* (width+height));
  
}