function poolPipes(args) {    
    let n = args[0].split('\n').map(Number);
    let volume = Number(n[0]);
    let pipe1 = Number(n[1]);
    let pipe2 = Number(n[2]);
    let hours = Number(n[3]);
    let water = pipe1 * hours  + pipe2 * hours;

    if (water <= volume){
        console.log(
            `The pool is ${Math.trunc(water/volume * 100)}% full. `
            + `Pipe 1: ${Math.trunc(pipe1 * hours /water * 100)}%. `
            + `Pipe 2: ${Math.trunc(pipe2 * hours /water * 100)}%.`
        );
    } else {
        console.log(
            `For ${hours} hours the pool overflows with ${Math.round((water - volume)*100)/100} liters.`
        );
    }
}