let markMass = 78;
let markHeight = 1.69;

let johnMass = 95;
let johnHeight = 1.88;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markMass > johnMass;

console.log("Mark's mass is " + markBMI.toFixed(2) + " and John's mass is " + johnBMI.toFixed(2));
console.log("Is Mark's higher than John's? " + markHigherBMI);

if (markBMI > johnBMI){
    console.log(`"Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`)
} else {
    console.log(`"John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`)
}