function solution(s) {

    let count = 0;
    for (let x = 0; x<s.length; x++){
        let check = s.slice(x, s.length) + s.slice(0, x);

        let stack = [];
        let valid = true;
        for (letter of check){
            if (letter === "{" || letter === "(" || letter === "["){
                stack.push(letter);
            }
            else{
                if (stack.length === 0){
                    valid = false;
                    break;
                }
                else{
                    let last = stack.pop();
                    if ((letter === "}" && last !== "{") ||
                        (letter === "]" && last !== "[") ||
                        (letter === ")" && last !== "(")){
                        valid = false;
                        break;
                        }
                }
            }
        }
        if (valid === true && stack.length === 0){
            count++;
        }
    }
return count;
}
