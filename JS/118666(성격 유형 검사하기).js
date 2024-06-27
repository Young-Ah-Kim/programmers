function solution(survey, choices) {

    const p_dict = {"R": 0, "T": 0, "C": 0, "F":0, "J":0, "M":0, "A": 0, "N": 0};


    for (let i = 0; i<survey.length; i++){
        if (choices[i] === 1){
            p_dict[survey[i][0]] += 3;
        }
        else if (choices[i] === 2){
            p_dict[survey[i][0]] += 2;
        }
        else if (choices[i] === 3){
            p_dict[survey[i][0]] += 1;
        }
        else if (choices[i] === 4){
            continue;
        }
        else if (choices[i] === 5){
            p_dict[survey[i][1]] += 1;
        }
        else if (choices[i] === 6){
            p_dict[survey[i][1]] += 2;
        }
        else if (choices[i] === 7){
            p_dict[survey[i][1]] += 3;
        }
    }

    let result = "";
    if (p_dict["R"] >= p_dict["T"]){
            result += "R";
        }
        else{
            result += "T";
        }
        if (p_dict["C"] >= p_dict["F"]){
            result += "C";
        } 
        else{
            result += "F";
        }
    if (p_dict["J"] >= p_dict["M"]){
        result += "J";
    }
    else{
        result += "M";
    }
    if (p_dict["A"] >= p_dict["N"]){
        result += "A";
    }
    else {
        result += "N";
    }

return result;
}
