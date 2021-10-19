let markMass = 78;
let markHeight = 1.69;

let johnMass = 95;
let johnHeight = 1.88;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markMass > johnMass;

console.log("Mark's mass is " + markBMI.toFixed(2) + " and John's mass is " + johnBMI.toFixed(2));
console.log("Is Mark's higher than John's? " + markHigherBMI);

