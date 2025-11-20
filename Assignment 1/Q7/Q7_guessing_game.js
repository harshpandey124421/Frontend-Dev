// Q7_guessing_game.js
// secret number 1-50
const secret = Math.floor(Math.random() * 50) + 1;
const userGuess = 20; // test value

if (userGuess === secret) {
  console.log("Correct guess!");
} else if (Math.abs(userGuess - secret) <= 3) {
  console.log("Very close!");
} else if (userGuess > secret) {
  console.log("Too high");
} else {
  console.log("Too low");
}
console.log("Secret was:", secret);
