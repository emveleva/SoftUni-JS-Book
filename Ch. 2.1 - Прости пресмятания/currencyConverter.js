function solve([num, cur1, cur2]){
    let result = 0;
    switch (cur1) {
        case "BGN":
            if (cur2 == "USD"){
                result = num / 1.79549;
            } else if (cur2 == "EUR"){
                result = num / 1.95583;
            } else if (cur2 == "GBP"){
                result = num / 2.53405;
            }
            break;
        case "USD":
            if (cur2 == "BGN"){
                result = num * 1.79549;
            } else if (cur2 == "EUR"){
                let convert = num * 1.79549;
                result = convert / 1.95583;
            } else if (cur2 == "GBP"){
                let convert = num * 1.79549;
                result = convert / 2.53405;
            }
            break;
        case "EUR":
            if (cur2 == "BGN"){
                result = num * 1.95583;
            } else if (cur2 == "USD"){
                let convert = num * 1.95583	;
                result = convert / 1.95583;
            } else if (cur2 == "GBP"){
                let convert = num * 1.95583;
                result = convert / 2.53405;
            }
            break;
        case "GBP":
            if (cur2 == "BGN"){
                result = num * 2.53405;
            } else if (cur2 == "USD"){
                let convert = num * 2.53405;
                result = convert / 1.79549;
            } else if (cur2 == "EUR"){
                let convert = num * 2.53405;
                result = convert / 1.95583;
            }

            break;
    }
    console.log(`${result.toFixed(2)} ${cur2}`)
}

solve([150.35, "USD", "EUR"])