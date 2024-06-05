// window.alert("Bem vindo ao caos")   

var time = prompt("Qual o nome do time?")

if(time == "São Paulo" || time == "São Paulo"){
    alert("O time é São Paulo")
    document.body.style.backgroundColor = "red"
    // creteElemet > serve para criar uma tag no html
    let nomeTime = document.createElement(`h1`)
    nomeTime.innerHTML = "São Paulo - Rogério Ceni"
    document.body.appendChild(nomeTime)
    // innerHTML > Inserir uma informação no html


}else if (time == "Corinthians"){
    alert("O time é o do Corinthians")
    document.body.style.backgroundColor = "black"


}else if(time == "Palmeiras"){

    alert("O time é do Palmeiras")
    document.body.style.backgroundColor = "green"

}else{
    alert("Não sei qual é esse time")
}