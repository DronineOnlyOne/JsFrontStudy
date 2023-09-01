var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

console.log('-------------- // -------------');

let changeMe = true;
console.log(changeMe);
changeMe = false; // was reassigned
console.log(changeMe);

console.log('-------------- // -------------');

const entree = 'Enchiliadas'; // variable cannot be reassigned because it is constant.
console.log(entree);
/*entree = 'Tacos'  not works because const cannot be reassigned */

console.log('-------------- // -------------');

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

levelUp += 5; // increase the value stored in 5
powerLevel -= 100; // decrease the value stored in 100
multiplyMe *= 11; // multiply the value stored in 11
quarterMe /= 4; // divide the value stored in 4

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);


console.log('-------------- // -------------');
/* The Increment and Decrement Operator */

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++; // The increment operator will increase the value of the variable by 1
lostDollar--; // The decrement operator will decrease the value of the variable by 1

/* Just like the previous mathematical assignment operators (+=, -=, *=, /=),
 the variable’s value is updated and assigned as the new value of that variable. */


console.log('-------------- // -------------');
/* String Interpolation */

const myName = 'Math';
const myCity = 'São Paulo';

/* One of the biggest benefits to using template literals is the readability of the code */
console.log(`My name is ${myName}. My favorite city is ${myCity}`)
// Output: My name is Math. My favorite city is São Paulo

console.log('-------------- // -------------');

/* Typeof Operator */

/* The typeof operator checks the value to its right and returns, or passes back, a string of the data type.*/

let variableString = "Its a string"
console.log(typeof variableString); // Output: String

let variableNumber = 10;
console.log(typeof variableNumber); // Output = Number

let variableBoolean = true;
console.log(typeof variableBoolean); // Output = Boolean