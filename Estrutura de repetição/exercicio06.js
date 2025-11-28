// 6. Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let numero = 1; // variavel inicializadora
let soma = 0;

//Condição
while (numero <= 100) {
    soma = soma + numero; // Esta somando os numeros 
    numero++ //incremento de cada volta
}

alert("A soma dos numeros de 1 a 100 é: " + soma);