function solution(s) {

    let result = "";
    for (let i = 0; i<s.length; i++){
        if (s[i-1] === " " || i === 0){
            result += s[i].toUpperCase();
        }
        else{
            result += s[i].toLowerCase();
        }
    }
return result;
}
