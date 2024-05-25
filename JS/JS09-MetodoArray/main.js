// Metodos forEach
let frutas = ["banana", "maça", "melancia", "tomate", "uva", "goiaba"]

frutas.forEach(retornaInfo);
function retornaInfo(nomeFruta, indice){
   console.log(`nomeFruta: ${nomeFruta}`)
   console.log(`indice: ${indice}`)

}

console.clear()

// Arrow fuction

frutas.forEach(teste = (nomeFrutas, Indice) =>{
    console.log(`nomeFrutas: ${nomeFrutas}`)
    console.log(`Indice: ${Indice}`)
})
//arrow function mais recente/minimalista
frutas.forEach((teste) => console.log(teste))
//ele vai retornar apenas o nome e não vai retornar o indice

console.clear()

let tarefa = [
    {
        id: 1,
        isPronta: true,
        NomeTarefa: "Fumar um F1"
    },
    {
        id: 2,
        isPronta: false,
        nomeTarefa: "Tomar banho"
    },
    {
        id: 3,
        isPronta: true,
        nomeTarefa: "Comer"
    },
]

tarefa.forEach((tarefa) => console.log(tarefa.nomeTarefa))

console.clear()

let numeros = [4, 9, 16, 25]
let novoArray = numeros.map(Math.sqrt)

console.log("Array antigo" + numeros)
console.log("novo array" + novoArray)

let mapText = tarefa.map((retonaText) => {
    console.log(retonaText.nomeTarefa)
})

console.clear()

let numeros2 = [3, 13, 24, 36, 47, 50, 60, 78, 88]

let resultado = numeros2.filter(retornafiltro)

function retornafiltro(num){
    return num > 30
}
console.log(resultado)

let tarefasfiltro = tarefa.map((resultadofiltro)=> {
    return resultadofiltro.isPronta === false
})

console.log(tarefasfiltro)

console.clear()

let sapatos = [
    {marca: "nike", quantidade: 3},
    {marca: "adidas", quantidade: 5},
    {marca: "puma", quantidade: 7},
];
console.log(
    sapatos.find((retornoFind) => {
        return retornoFind.marca = "puma"
    })
)
