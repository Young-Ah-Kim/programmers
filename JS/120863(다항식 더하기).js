function solution(polynomial) {
    let x_list = [];
    let n_list = [];
    let split_s = polynomial.split(" ");
    for (s of split_s){
        if (s.includes("x")){
            x_list.push(s);
        }
        else if (s === "+"){
            
        }
        else{
            n_list.push(s);
        }
    }

    let x_number = 0;
    for (n of x_list){
        let split_n = n.split("x");
        if (n === "x"){
            x_number ++;
        }
        for (s of split_n){
            if (s !== ""){
            x_number += Number(s)
        }
        }
    }
    let y_number = 0;
    for (n of n_list){
        y_number += Number(n);
    }

    let result = "";
    if (polynomial.includes("x")){
    if (x_number > 1){
        result += x_number;
    }
    else{
    }
    result += "x";
    }
    if (result === ""){
        result += y_number;
    }
    else if (y_number !== 0){
        result += " + "
        result += y_number;
        }
    return result;
}

