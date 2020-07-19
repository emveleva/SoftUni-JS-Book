function solve([num1, num2, num3, num4]) {
    let priceVeg = Number(num1);
    let PriceFr = Number(num2);
    let kgVeg = Number(num3);
    let kgFruit = Number(num4);
    let veg = priceVeg*kgVeg;
    let fruit = PriceFr*kgFruit;
    let result = (veg+fruit)/1.94
    console.log(result.toFixed(2))
}

solve([0.194, 19.4, 10, 10])