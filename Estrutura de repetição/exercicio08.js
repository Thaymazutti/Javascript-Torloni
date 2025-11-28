// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.


let idadeinformada = parseInt(prompt("Qual é sua idade?"))

while (idadeinformada < 18){
      
    idadeinformada = parseInt(prompt("Qual é sua idade?"))
}

if(idadeinformada >= 18){

    alert("Você é maior de 18 anos!!!")
}