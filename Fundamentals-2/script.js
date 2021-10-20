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