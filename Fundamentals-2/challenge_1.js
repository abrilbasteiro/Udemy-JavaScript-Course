const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;
const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);

function checkWinner(averageDolphins, averageKoalas) {
    if (averageDolphins >= averageKoalas * 2){
        return (`Dolphins win (${averageDolphins} vs ${averageKoalas})`);
    } else if (averageKoalas >= averageDolphins * 2){
        return (`Koalas win (${averageKoalas} vs ${averageDolphins})`);
    } else {
        return ("No ones win");
    }
}

console.log(checkWinner(averageDolphins, averageKoalas));