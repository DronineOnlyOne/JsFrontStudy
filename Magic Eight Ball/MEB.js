const userName = 'Math';
let userQuestion = 'I can eat my bread now?';
const randomNumber = Math.floor(Math.random() * 8); // i use math library to return a random number between 0 and 8.
let eightBall = ''; // We will save a value to this variable in the next steps, depending on the value of randomNumber

console.log(`${userName} ask: ${userQuestion}`)
switch (randomNumber) {
    case 1:
        eightBall = 'Maybe not'; // the new value are declared in eightBall variable depending on the value of randomNumber.
        console.log(`The Eight Ball say for you: ${eightBall}`);
        break;
    case 2:
        eightBall = 'Yeah, maybe';
        console.log(`The Eight Ball say for you: ${eightBall}`);
        break;
    case 3:
        eightBall = 'Is a good idea!';
        console.log(`The Eight Ball say for you: ${eightBall}`);
        break;
    case 4:
        eightBall = 'Signs point to yes!';
        console.log(`The Eight Ball say for you: ${eightBall}`);
        break;
    case 5:
        eightBall = 'Yes off course!'
        console.log(`The Eight Ball say for you: ${eightBall}`);
        break;
    case 6:
        eightBall = "Why you didn'it yet?"
        console.log(`The Eight Ball say for you: ${eightBall}`);;
        break;
    case 7:
        eightBall = 'DO IT!'
        console.log(`The Eight Ball say for you: ${eightBall}`);
        break;
    default:
        console.log(`The Eight Ball say for you: ${eightBall}`);
}
