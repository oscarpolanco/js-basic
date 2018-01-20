/*
3 players enter it height on centimeters plus five times
the age the winners its the one with the biggest score
*/
var playerOneHeight = prompt('Enter the player one height');
var playerTwoHeight = prompt('Enter the player two height');
var playerThreeHeight = prompt('Enter the player three height');
var playerOneAge = prompt('Enter the player one age');
var playerTwoAge = prompt('Enter the player two age');
var playerThreeAge = prompt('Enter the player three age');

var playerOneValue = parseInt(playerOneHeight) + 5 * playerOneAge;
var playerTwoValue = parseInt(playerTwoHeight) + 5 * playerTwoAge;
var playerThreeValue = parseInt(playerThreeHeight) + 5 * playerThreeAge;

if (playerOneValue > playerTwoValue && playerOneValue > playerThreeValue) {
    console.log('Player one win with this score: ' + playerOneValue);
} else if (playerOneValue < playerTwoValue && playerThreeValue < playerTwoValue) {
    console.log('Player two win with this score: ' + playerTwoValue);
} else if (playerOneValue < playerThreeValue && playerTwoValue < playerThreeValue) {
    console.log('Player three win with this score: ' + playerThreeValue);
} else {
    console.log('the players draw with this score: ' + playerOneValue);
}
