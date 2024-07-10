function solution(citations) {

    citations.sort((a, b) => b-a);

    let h_index = 0;
    
    for (let i = 0; i<citations.length; i++){
        if (citations[i] >= i+1){
            h_index = i+1;
        }
        else if (citations[i] < i+1){
            break;
        }
    }
return h_index;
}
