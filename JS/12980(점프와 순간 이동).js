function solution(N) {

    let count = 0;
    while (N > 0){
        if (N%2=== 0){
            N = parseInt(N/2);
        }
        else{
            N = N - 1;
            count++;
        }
    }
return count;
}
