// Neste ponto, você tem algumas variáveis que representam partes do seu jogo de cartas. Lembre-se de que você tem
//constantes disponíveis, que são variáveis que não devem ter seu valor alterado. Vamos ver quais variáveis podem ser melhor 
//representadas como constantes no seu código-fonte.

// let startingPokerChips = 100;
// let player = 3;
// let noOfStarterCards = 2;

const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;

// let playerOnePoints = startingPokerChips;
// let playerTwoPoints = startingPokerChips;
// let playerThreePoints = startingPokerChips;

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 50;
playerTwoPoints -= 25;
playerThreePoints += 75;

console.log(playerThreePoints);