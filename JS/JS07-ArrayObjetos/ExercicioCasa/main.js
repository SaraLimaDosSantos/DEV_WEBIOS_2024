var alunos = [
    {
        nome: "Luiza",
        idade: 18,
        nota: 8,
        ano: "3B"
    },
    {
        nome: "Matheus",
        idade: 17,
        nota: 6,
        ano: "2A"
    },
    {
        nome: "João",
        idade: 19,
        nota: 9,
        ano: "3C"
    },
    {
        nome: "Bruna",
        idade: 15,
        nota: 9,
        ano: "1E"
    },
    {
        nome: "Sara",
        idade: 15,
        nota: 7,
        ano: "2C"
    },
    {
        nome: "Julia",
        idade: 16,
        nota: 5,
        ano: "3C"
    }
]
console.log(alunos)
console.log(alunos[1])
console.log(alunos[5].nota)

var alunosEmJailson = JSON.stringify(alunos)
console.log(alunosEmJailson)