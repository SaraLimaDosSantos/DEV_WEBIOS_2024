// Exercicio 01

let parImpar = [17, 43, 8, 4, 97, 56, 29]

parImpar.forEach(numero => { 
    if (numero % 2 === 0) {  
        console.log(Número par: ${numero});
    }else{
        console.log(Número ímpar: ${numero});
    }
})

// Exercicio 02

let filtro = [17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61]

let resultado = filtro.filter(num => num > 20 && num < 80) 

console.log(resultado);
