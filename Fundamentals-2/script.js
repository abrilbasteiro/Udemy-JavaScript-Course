'use strict';

// Functions
function describeCountry (country, population, capitalCity){
    const pais = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
    return pais;
}
const argentina = describeCountry("Argentina", 43, "Buenos Aires");
console.log(argentina);

const uruguay = describeCountry("Uruguay", 3, "Montevideo");
console.log(uruguay);

const peru = describeCountry("Peru", 32, "Lima");
console.log(peru);

// Function Declarations vs. Expressions
// Declaration
function percentageOfWorld1 (population) {
    return ((population / 7900) * 100).toFixed(2);
}

const china = percentageOfWorld1(1441);
console.log(china);

const jamaica = percentageOfWorld1(3);
console.log(jamaica);

const turquia = percentageOfWorld1(84);
console.log(turquia);

// Expression
const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100).toFixed(2);
}

const inglaterra = percentageOfWorld2(55);
console.log(inglaterra);

const alemania = percentageOfWorld2(83);
console.log(alemania);

const newZeland = percentageOfWorld2(5);
console.log(newZeland);