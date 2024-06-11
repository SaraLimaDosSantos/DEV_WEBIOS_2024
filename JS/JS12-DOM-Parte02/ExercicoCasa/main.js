//primeiro botão
var botao = prompt ("clique aqui")


if(botao == "clique aqui"){
    document.body.style.color = "#262525"
    let img = document.createElement("img")
    img.src = "https://img.quizur.com/f/img62cdb3dc066135.87051598.jpg?lastEdited=1657675223"
    document.body.appendChild(img)
}

//segundo botão
var botao2 = prompt("Insira seu nome de usuário")

if(botao2 == "Sara"){
    let nome = document.createElement("nome")
    nome.innerHTML = "Bem vindo"
    document.body.appendChild(nome)
}

//terceito botão
window.alert('Escolha um número')
function tabuada(){
    for (let count = 1; count <= 10; count++){
        document.write(`2 x ${count} = ${2 * count}<br />`);
    }
}
tabuada();