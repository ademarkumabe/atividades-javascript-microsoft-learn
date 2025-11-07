//Player

let cardOnePlayer = 7;
let cardTwoPlayer = 5;
let sumPlayer = cardOnePlayer + cardTwoPlayer; // 15

let cardThreePlayer = 7;
sumPlayer += cardThreePlayer;
if (sumPlayer > 21) {
  console.log(`Você perdeu, com ${sumPlayer}`);
  console.log(`Dealer é o vencedor com ${sumDealer}`);
  process.exit(1); // exit program
}
console.log(`Você tem ${sumPlayer} pontos.`);


//Dealer
let dealerCardOne = 7;
let dealerCardTwo = 5;
let dealerCardThree = 6;
let sumDealer = dealerCardOne + dealerCardTwo + dealerCardThree;

let dealerCardFour = 4;
sumDealer += dealerCardFour;

if (sumDealer > 21) {
  console.log(`Dealer perdeu, com ${sumDealer}`)
  console.log(`Você é o vencedor, com ${sumPlayer}`)
  process.exit(0); // exit program

  //sobre o process.exit e seus valores.  
  // 0: exit normalmente (sucesso)
  // 1: exit com erro (fracasso), mas pode ser utilizado para indicar
  // que a saída foi intencionalmente programada para fins de
  // identificação e desenvolvimento, e não necessariamente um erro.

  // Exemplo de saída
  // process.exit(0); // Sair sem erro (normal)
  // process.exit(1); // Sair com código 1 para identificação (não erro)

  // No VS Code, as cores ajudam a identificar o status de saída
  // code=0: normalmente verde (sucesso)
  // code=1: normalmente vermelho (indica saída intencional, mas não erro)


}
console.log(`Dealer tem ${sumDealer} pontos.`);

//Vencedor
if (sumDealer > sumPlayer) {
  console.log(`Dealer é o vencedor, com ${sumDealer} pontos`)
} else if (sumPlayer > sumDealer) {
  console.log(`Você é o vencedor, com ${sumPlayer} pontos`)
} else {
  console.log(`Dealer e Player empataram, com ${sumDealer} pontos`)
}
