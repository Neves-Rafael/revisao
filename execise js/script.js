// 1- Crie um script que exiba a mensagem"Hello World!" em um alerta no navegador.✅
alert("Hello World!");

// 2- Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.✅
let numberOne = Number(prompt("Enter first number"));
let numberTwo = Number(prompt("Enter second number"));
alert(`O resultado da soma é: ${numberOne + numberTwo}`);

// 3- Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".✅
let verifyNumber = Number(prompt("Enter contents for verify"));
if (isNaN(verifyNumber)) {
  alert("Is not a number");
} else {
  alert("Is a number");
}

// 4- Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".✅
let verifyString = Number(prompt("Enter contents for verify"));
if (isNaN(verifyString)) {
  alert("Is a string");
} else {
  alert("Is not a string");
}

// 5- Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".✅
let verifyBoolean = Boolean(prompt("Enter contents for verify"));
console.log(verifyBoolean);
if (Boolean(verifyBoolean)) {
  alert("Is a boolean");
} else {
  alert("Is not a boolean");
}

// outra versão apenas com true e false

let verifyBoolean = prompt(`Enter boolean contents for verify.
 true or false`);

if (verifyBoolean === "true" || verifyBoolean === "false") {
  alert("Is a boolean");
} else {
  alert("Is not a boolean");
}

// 6- Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.✅
let numberOne = Number(prompt("Enter first number"));
let numberTwo = Number(prompt("Enter second number"));
alert(`O resultado da subtração é: ${numberOne - numberTwo}`);

// 7- Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.✅
let numberOne = Number(prompt("Enter first number"));
let numberTwo = Number(prompt("Enter second number"));
alert(`O resultado da multiplicação é: ${numberOne * numberTwo}`);

// 8- Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.✅
let numberOne = Number(prompt("Enter first number"));
let numberTwo = Number(prompt("Enter second number"));
alert(`O resultado da divisão é: ${numberOne / numberTwo}`);

// 9- Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".✅
let verifyEvenNumber = Number(prompt("Enter contents for verify"));
if (verifyEvenNumber % 2 === 0) {
  alert("Is a even number");
} else {
  alert("Is not a even number");
}

// 10- Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".✅
let verifyOddNumber = Number(prompt("Enter contents for verify"));
if (verifyOddNumber % 2 !== 0) {
  alert("Is a odd number");
} else {
  alert("Is not a odd number");
}
