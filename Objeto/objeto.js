let mercedes = {
    modelo: "G63", //característica propriedades
    ano: 2025,
    fabricante: "mercedes",
    cor: "preto fosco",
    acelerar() { //comportamentos - métodos
        console.log("Acelerando...vrum...vrum");
    },
    freiar() {
        console.log("Freiando....");
    }
};

console.log(mercedes.modelo);
console.log(mercedes.acelerar());


//Criar um objeto Professor Tadeu ou Jonas
//3 propriedades nome, NIF, salario
//2 comportamentos atribuir nota e bater ponto
//Além disso, escolha mais uma propriedade e mais um comportamento

let professorfelipetadeu = {
    nome: "Felipe Tadeu",
    NIF: 567890,
    Salário: 8850,
    dataNasc: new Date(1998, 2, 17),
    hobbies: ["Correr", "jogar", "estudar"],

    atribuirNota() { },
    baterPonto() {
        let horarioBatido = new Date(2025, 10, 28, 17, 5);

        console.log(horarioBatido);
    }
};

console.log(professorfelipetadeu.hobbies)
console.log(professorfelipetadeu.dataNasc)
console.log(professorfelipetadeu.baterPonto())