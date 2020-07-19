function solve([num]){
    let second = num[1];
    num = Number(num);
    let print = "";
 if (num >= 0 && num <= 100){
    if (Math.floor(num / 10) === 2){
        print += "twenty";
    } else if (Math.floor(num/10) === 3){
        print += "thirty"
    } else if (Math.floor(num/10) === 4){
        print += "forty"
    } else if (Math.floor(num/10) === 5){
        print += "fifty"
    } else if (Math.floor(num/10) === 6){
        print += "sixty"
    } else if (Math.floor(num/10) === 7){
        print += "seventy"
    } else if (Math.floor(num/10) === 8){
        print += "eighty"
    } else if (Math.floor(num/10) === 9){
        print += "ninety"
    }
    
    if (num > 19  || num < 10){
        if (second != "0" && num < 100 && num > 9){
            print += " ";
        }
        if (num === 0){
            print += "zero";
        } else if (num % 10 === 1){
        print += "one"
    } else if (num % 10 === 2){
        print += "two"
    } else if (num % 10 === 3) {
        print += "three"
    } else if (num % 10 === 4) {
        print += "four";
    } else if (num % 10 === 5) {
        print += "five";
    } else if (num % 10 === 6) {
        print += "six";
    } else if (num % 10 === 7) {
        print += "seven";
    } else if (num % 10 === 8) {
        print += "eight";
    } else if (num % 10 === 9) {
        print += "nine";
      
    } 
}

    if (num === 10){
                print += "ten";
            } else if (num === 11){
                print += "eleven";
            } else if (num === 12){
                print += "twelve";
            } else if (num === 13){
                print += "thirteen";
            } else if (num === 14){
                print += "fourteen";
            } else if (num === 15){
                print += "fifteen";
            } else if (num === 16){
                print += "sixteen";
            } else if (num === 17){
                print += "seventeen";
            } else if (num === 18){
                print += "eighteen";
            } else if (num === 19){
                print += "nineteen";
            } else if (num === 100){
                print += "one hundred";
            }
    
    console.log(print)
   
}else {
    console.log("invalid number")
}}

solve([""])