function solve([num1, num2, num3]){
    let bitcoinCount = Number(num1);
    let chiIuan = Number(num2);
    let comission = Number(num3/100);
    let totalBitcoins = bitcoinCount*1168;
    let ChiIuanDollar = chiIuan*0.15;
    let totalChi = ChiIuanDollar*1.76;
    let totalLeva = totalBitcoins+totalChi;
    let totalEuro = totalLeva/1.95;
    let com = totalEuro*comission;
    let total = totalEuro-com;
    console.log(total.toFixed(2));
}
solve([1, 5, 5])