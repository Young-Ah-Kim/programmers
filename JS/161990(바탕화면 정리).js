function solution(wallpaper) {
    let file = [];
    for (let i = 0; i<wallpaper.length; i++){
        for (let j = 0; j<wallpaper[0].length; j++){
            if (wallpaper[i][j] === "#"){
                file.push([i, j]);
                
            }
        }
    }
    //드래그 시작점
    let Xlist = [];

    for (n of file){
        Xlist.push(+n[0]);
    }

    let Ylist = [];

    for (n of file){
        Ylist.push(+n[1]);
    }

    Xlist.sort((a, b) => (a-b));
    let lux = Xlist[0];
    let rdx = +Xlist.slice(-1) +1;
    Ylist.sort((a, b) => (a-b));
    let luy = Ylist[0];
    let rdy = +Ylist.slice(-1) +1;

return [lux, luy, rdx, rdy];
}
