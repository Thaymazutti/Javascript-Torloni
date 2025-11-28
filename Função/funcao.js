function exibirTabuadaEscolhida() {
    let tabuada = parseInt(prompt("Digite o número da Tabuada desejada:"));

    console.log(`Tabuada do ${tabuada}:`);

    for (let i = 1; i <= 10; i++) {
        // 2 x 4 =
        console.log(tabuada + " X " + i + " = " + (tabuada * i));
    }
}


//chama a minha função
// exibirTabuadaEscolhida();

//Crie uma função para que solicite o nome da pessoa e exiba-o
function exibirNomeSolicitado() {
    let exibirNomeSolicitado = prompt("Digite seu nome");

    return exibirNomeSolicitado;
}

// let nome = exibirNomeSolicitado();

// alert(nome);

function somarDoisNumeros(numero1, numero2) {
    console.log(numero1+numero2);  
}

somarDoisNumeros(10, 10);


//Crie função para o exercicio 08 de Estrutura Condicional
//Passe via parametro o peso e a altura

//1 coisa a se fazer - criar a estrutura da função com os seus devidos parametros
//2 coisa a se fazer - copiar o código do IMC
//3 coisa a se fazer - colar o código do IMC dentro da função
//4 coisa a se fazer - chamar a função e atribuir peso e altura

function calcularIMC(peso, altura) {

    let imc = peso / (altura * altura);


    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35.0 && imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);

}

let pesoDigitado = parseFloat(prompt("Digite seu peso em kg:"));
    let alturaDigitada = parseFloat(prompt("Digite sua altura em metros:"));

    calcularIMC(pesoDigitado, alturaDigitada);
