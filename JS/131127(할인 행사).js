function solution(want, number, discount) {

    const wishList = {};
    for (let i = 0; i<want.length; i++){
        wishList[want[i]] = number[i];
    }

    let count = 0;

    for (let i = 0; i<discount.length; i++){
        let checkList = {};
        for (let j = i; j<i+10; j++){
            if (!checkList[discount[j]]){
                checkList[discount[j]] = 1;
            }
            else{
                checkList[discount[j]] += 1;
            }
        }

        let isMatch = true;
        
        for (let key in wishList){
            if (wishList[key] !== checkList[key]){
                isMatch = false;
            }
        }
        if (isMatch){
            count++;
        }
    }
return count;
}
