function solution(rsp) {
    let result = "";
    for (n of rsp){
        if (n==="2"){
            result += "0";
        }
        else if (n==="0"){
            result += "5";
        }
        else if (n==="5"){
            result += "2";
        }
    }
return result;
}
