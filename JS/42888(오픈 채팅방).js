function solution(record) {

    const udict = {};

    for (reco of record){
        reco = reco.split(" ");
        if (reco[0] === "Enter"){
            udict[reco[1]] = reco[2];}
        else if (reco[0] === "Change"){
            udict[reco[1]] = reco[2];
        }
    }

    let result = [];
    for (reco of record){
        reco = reco.split(" ");
        if (reco[0] === "Enter"){
            result.push(udict[reco[1]] + "님이 들어왔습니다.")
        }
        else if (reco[0] === "Leave"){
            result.push(udict[reco[1]] + "님이 나갔습니다.")
        }
    }

return result;
}
