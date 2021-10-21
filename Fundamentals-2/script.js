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


// Arrow Functions
const percentageOfWorld3 = population => ((population / 7900) * 100).toFixed(2);

const brasil = percentageOfWorld3(212);
console.log(brasil);

const paraguay = percentageOfWorld3(7);
console.log(paraguay);

const bolivia = percentageOfWorld3(11);
console.log(bolivia);

// Functions Calling Other Functions
function describePopulation (country, population){
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, wich is about ${percentage}% of the world`   
    console.log(description) 
}

describePopulation("Chile", 19);
describePopulation("Ecuador", 17);
describePopulation("Colombia", 50);

// Introduction to Arrays
const populations = [50, 17, 19, 11];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);

// Basic Array Operations (Methods)
const neighbours = ["Bolivia", "Paraguay", "Chile", "Brasil", "Uruguay"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")){
    console.log("Probably not a central European country :D")
};

neighbours [neighbours.indexOf("Brasil")] = "Hawai"
console.log(neighbours)