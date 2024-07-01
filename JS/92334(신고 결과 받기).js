function solution(id_list, report, k) {

    const rdict = {};
    const userReport = {};

    let report2 = [...new Set(report)];

    for (repo of report2){
        repo = repo.split(" ");
        let reporter = repo[0];
        let bad = repo[1];
        if (!rdict[bad]){
            rdict[bad] = 1;
        }
        else{
            rdict[bad] += 1;
        }
        if (!userReport[reporter]){
            userReport[reporter] = [bad];
        }
        else{
            userReport[reporter].push(bad);
        }
        
    }

    let blist = Object.keys(rdict).filter(bad => rdict[bad] >= k);

    let result = [];
    for (user of id_list){
        if (!userReport[user]) result.push(0);
        else{
            result.push(userReport[user].filter(bad => blist.includes(bad)).length);
    }
    }
    return result;
}
