// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.



let primeironumero = parseInt(prompt("Digite o primeiro número da sua sequência "));
let segundonumero = parseInt(prompt("Digite o segundo número da sua sequência "));
let terceironumero = parseInt(prompt("Digite o terceiro número da sua sequência "));

if (primeironumero < segundonumero && segundonumero < terceironumero) {
     alert("Está em ordem crescente.");
}

// verificar o decrescente

if (primeironumero < segundonumero && segundonumero > terceironumero) {
     alert("Está em ordem decrescente")
     
}

// verificar o aleatório

else{
alert ("Os números estão em oredem aleatória.")
}