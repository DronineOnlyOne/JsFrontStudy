
console.log(`-------------------- If statement -----------------------`);

// If statement
let sale = true;
if (sale == true) {
  console.log('Time to buy!');
}

console.log(`-------------------- If else statement -----------------------`);


// If else statement
let sale2 = true;

sale2 = false;

if (sale2) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}


/* Comparison Operators */
console.log(" --------------- Comparison Operators --------------- ");

let hungerLevel = 7; // set the value for the comparasion 

if (hungerLevel > 7) { // use '>' operators
  console.log("Time to eat!");
}
else {
  console.log("We can eat later!");
} // Print: Time to eat!


/* Logical Operators */
console.log(" --------------- Logical Operators --------------- ");

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) { /* the logical operator '&&' means  evaluate to true for the 
                                               entire condition to evaluate to true and execute */
  console.log('time to sleep')
}
else {
  console.log('not bed time yet')
} // print : Not bed time yet


/* Truthy and Falsy */
console.log(" --------------- Truthy and Falsy --------------- ");

let wordCount = 0; // since 0 is a falsy value
wordCount = 1; // >0 is a truthy value

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}// Print: Great! You've started your work!


let favoritePhrase = 'Hello World!';
favoritePhrase = ''; // empty strings is a flasy value

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
} // Print: This string is definitely empty.


/* Truthy and Falsy Assignment */
console.log(" --------------- Truthy and Falsy Assignment --------------- ");

let tool = ''; // falsy
tool = 'marker'; // truthy

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'; // the console prints 'tool'if truthy and 'pen' if it's falsy

console.log(`The ${writingUtensil} is mightier than the sword.`);


/* Ternary Operator */
console.log(" --------------- Ternary Operator --------------- ");

/* Like if...else statements, ternary operators can be used for conditions which evaluate to true or false. */

let isLocked = false;

// The '?' operator works like a 'If'
isLocked ? console.log('You will need a key to open the door.')
  : console.log('You will not need a key to open the door.');
// The ':' operator works like a 'else'

let isCorrect = true;

isCorrect ?
  console.log('Correct!')
  :
  console.log('Incorrect!');

let favoritePhrase2 = 'Love That!';

// '===' works here. We can use this for compare strings!
favoritePhrase2 === 'Love That!' ?
  console.log("I love that!")
  :
  console.log("I don't love that!");


  /* Else If Statements*/
console.log(" --------------- Else If Statements --------------- ");

let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
}
// else if statement also takes a condition and is another verification like 'if'
 else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} 
 else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} 
 else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} 
 else {
  console.log("Invalid season.");
}

/* The switch keyword */ 
console.log(" --------------- The switch keyword --------------- ");

let athleteFinalPosition = "first place";

// works like if else statement, but that is easier to read and write
switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}