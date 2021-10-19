// Hello World! 

let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10);

let firstName = "Abril";
console.log(firstName);

// Values and Variables

const country = "Argentina";
let continent = "América del Sur";
let population = 43000000;

console.log(country, continent, population);

// Data Types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
language = "spanish";

// Basic Operators
halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

finlandPop = 6000000;
console.log(population > finlandPop); 

const averagePop = 33000000;
console.log(population < averagePop);

description = country + " is in " + continent + ", and it's " + population + " people speak " + language;
console.log(description);

// Strings and Template Literals

newDescription = `${country} is in ${continent}, and it's ${population} people speak ${language}`;
console.log(newDescription);

// Taking Decisions: if / else Statements
if (population > averagePop){
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${averagePop - population} bellow average`)
};
