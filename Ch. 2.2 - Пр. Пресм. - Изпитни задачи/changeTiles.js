function solve([num1, num2, num3, num4, num5]) {
    let squareN = Number(num1);
    let tileW = Number(num2);
    let tileL = Number(num3);
    let benchM = Number(num4);
    let benchO = Number(num5);
    let area = (squareN*squareN)-(benchM*benchO);
    let tile = tileW*tileL;
    let tilesTotal = area/tile;
    let time = tilesTotal*0.2;
    console.log(Math.round(tilesTotal*100)/100);
    console.log(Math.round(time*100)/100);
    
}

solve([20, 5, 4, 1, 2]);