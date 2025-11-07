
// function displayGreeting(name, salutation = "hello") {
//   console.log(`${name}, ${salutation}`);
//   return
// }
// displayGreeting("Ademar");

// Continuando nosso exemplo anterior, você pode escrever uma função para criar uma mensagem de saudação e retornar o valor ao chamador. A palavra-chave return interrompe a execução da função e retorna o valor especificado se aplicável. Portanto, em geral você deve usar return ao final da função, desta forma:

function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
let greetingMessage = createGreetingMessage("Ademar");


console.log(greetingMessage);