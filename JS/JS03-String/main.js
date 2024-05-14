var string = "Os alunos estão";
var string2 = "reprovados";
var string3 = "ou aprovados?";
var olhaAi = "Os reprovados"
var num1 = 2
var num2 = 3

console.log(string + string2 + string3)
//tempalte string
console.log(`${string + string2 + string3 + (num1 * num2) + olhaAi}`)

console.clear();

var texto1 = "IOS fez uma excursão na TOTVS com tres cabritinhos(alunos)"

console.log(texto1.charAt(2))

console.clear()
//tamanho da string

var texto2 = "IOS"
var texto3 = "Está chovendo"

console.log(`na variavel texto2 tem ${texto2.length} caracteres`)
console.log(`na variavel texto3 ${texto3.length} caracteres`)

console.clear()
//Maiúsculas e minúsculas

var texto4 = "sara é linda aqui está em maiúsculo"
var texto5 = "SARA È MARAVILHOSA AQUI ESTÀ EM MINÙCULO"

console.log(`Minúsculo: ${texto5.toLocaleLowerCase()}`)

console.log(`Maiúculo: ${texto4.toUpperCase()}`)

console.clear()

//substring

var str = "Mozilla"


console.log(str)
console.log(str.substring(1, 3))

console.clear()
//string replace
var texto6 = "Olha a pipoca"

console.log(texto6.replace(`pipoca,` `Carreta furação`))

console.clear()

var texto7 = "       Olha a carreta        "

console.log(texto7)
console.log(texto7.trim)