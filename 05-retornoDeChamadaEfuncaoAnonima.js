// Em essência, o retorno de chamada é uma forma de passar uma função como parâmetro para outra função. Esse parâmetro se comporta da mesma forma que qualquer outro, como cadeias de caracteres ou números, exceto pelo fato de que ele pode ser chamado, já que é uma função

//função que chamam outros serviços. (no caso console.log)
// function displayDone() {
//   console.log('Done!');
// }

//função que chama outra função (displayDone) e chama outro serviço (que é uma função interna que lhe permite criar um temporizador.)
// timer value is in milliseconds
// setTimeout(displayDone, 3000);

// Embora o código anterior seja válido, ele pode criar o que alguns desenvolvedores chamam de "poluição do namespace". Ou seja, quando você escreve código com muitas variáveis, funções e outras entidades com nomes, pode se tornar confuso saber a finalidade de cada uma delas e, às vezes, os bons nomes podem acabar. Em nosso exemplo, se o único lugar e que displayDone será usado for com setTimeout, então não será necessário dar um nome a ele. Você pode criar uma função anônima.

// Uma função anônima é uma função sem nome.As funções anônimas se comportam da mesma forma que as funções regulares e são como os desenvolvedores normalmente configuram os retornos de chamada.

// É possível criar uma função anônima usando a mesma sintaxe que você usaria para criar uma função normal, exceto pelo fato de omitir o nome.Por exemplo:

setTimeout(
  function () { //anonymous funcion
    console.log("Done!");
  }, 3000 // 3000 milliseconds (3 seconds)
)