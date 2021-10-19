scoreDolphins = (96 + 108 + 89) / 3;
scoreKoalas = (88 + 91 + 110) / 3;
console.log(`Dolphins average score: ${scoreDolphins.toFixed(2)}
Koalas average score: ${scoreKoalas.toFixed(2)}`);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins wins the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas wins the trophy");
} else if (scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreDolphins >= 100){
    console.log("It's a draw!");
} else {
    console.log("No one wins the trophy");
}