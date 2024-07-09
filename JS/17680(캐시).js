function solution(cacheSize, cities) {

    let cache = [];
    let time = 0;

    for (city of cities){
        city = city.toLowerCase();
        let index = cache.indexOf(city);
        if (!cache.includes(city)){
            if (cacheSize > 0){
            if (cache.length < cacheSize){
                cache.push(city);}
            else{
                cache.shift(city);
                cache.push(city);
            }}
            time += 5;
        }
        else{
            cache.splice(index, 1);
            cache.push(city);
            time += 1;
        }
    }
return time;

}
