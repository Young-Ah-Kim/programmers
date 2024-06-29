function solution(players, callings) {
    const pdict = {};

    players.forEach((name, index) => {
        pdict[name] = index;
    })

    for (call of callings){
        let now = pdict[call];
        let temp = players[now];
        players[now] = players[now-1];
        players[now-1] = temp;


        pdict[players[now]] = now;
        pdict[players[now-1]] = now-1;

        
    }
                        
    return players;
}
