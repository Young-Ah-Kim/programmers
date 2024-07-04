function solution(s) {

    let temp = [];
    for (let i = 0; i<s.length; i++){
        if (temp.length === 0){
            temp.push(s[i]);
        }
        else{
            let last = temp[temp.length-1];
            if (last === s[i]){
                temp.push(s[i]);
                temp.pop();
                temp.pop();
            }
            else{
                temp.push(s[i]);
            }   
        }
    }

    
if (temp.length === 0){
    return 1;
}
    else{
        return 0;
    }
}
