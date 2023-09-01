let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegistered = true;
let earlyAdults = false; // if a adult registered early, he run 9:30AM
let lateAdults = true; // if a adult registered late, he run 11:00AM
let runnerAge = 17; // if the runner have less than 18 years old, he run 12:30PM

if (runnerAge >= 18 && runnerRegistered == true && earlyAdults == true) {
  console.log(`Your race number is ${raceNumber}, and you can run the 9:30AM`);
} 
else if (runnerAge >= 18 && runnerRegistered == true && lateAdults == true) {
  console.log(`Your race number is ${raceNumber}, and you can run the 11:00AM`);
} 
else if (runnerAge >= 18 && runnerRegistered == false) {
  console.log(`You need sign up first!`);
} 
else if (runnerAge < 18 && runnerRegistered == true) {
  console.log(`Your race number is ${raceNumber}, and you can run the 12:30PM`);
} 
else {
  console.log(`I need your age and hour you sign up!`);
}
// Output : Your race number is (random number), and you can run the 12:30PM
