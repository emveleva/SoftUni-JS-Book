function solve(input) {
    let inputAsString = input.toString();
    let inputArr = inputAsString.split("\n");
    let volumePool = inputArr[0];
    let P1 = inputArr[1];
    let P2 = inputArr[2];
    let hoursMissing = inputArr[3];

    let waterP1 = P1 * hoursMissing;
    let waterP2 = P2 * hoursMissing;
    let waterTotal = waterP1 + waterP2;
    let overflow = waterTotal - volumePool;

    if(waterTotal <= volumePool) {
        let percentFull = Math.floor(waterTotal*100/volumePool);
        let percentP1 = Math.floor(waterP1*100 / waterTotal);
        let percentP2 = Math.floor(waterP2*100 / waterTotal);
        console.log(`The pool is ${percentFull}% full. Pipe 1: ${percentP1}%. Pipe 2: ${percentP2}%.`)
    } else {
        console.log(`For ${hoursMissing} hours the pool overflows with ${Math.round(overflow*100)/100} liters.`)
    }
}

solve([ '100\n100\n100\n2.5' ])
