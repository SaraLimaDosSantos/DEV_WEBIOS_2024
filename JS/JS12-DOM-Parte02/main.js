// getElentById
let primeiroTitulo = document.getElementById
("primeiroTitulo");

primeiroTitulo.style.color = `blue`;
primeiroTitulo.innerText = `Tulipa`

//getElementsByClassName
let pegaClasse = document.getElementsByClassName
(`getClass`);

console.log(pegaClasse)

for(i = 0; i < pegaClasse.length; i++){
    pegaClasse[i].style.color =`blue`
}
console.log(pegaClasse)
console.clear()

//getElementsByname
let byName = document.getElementsByName("filho");

console.log(byName);

byName.forEach(funcao)

function funcao (cont, indice){
    return byName[indice].style.color = "pink"
}

console.clear()

// getElementsByTagName
let bytagName = document.getElementsByTagName("p");

for(c = 0; c < bytagName.length; c++){
    bytagName[c].style.color = '#6a88f5'
    bytagName[c].style.fontSize = '10px'
    bytagName[c].style.boxShadow = '5px 2px 5px #5078e2'
    // Todos que são pares
    if(c % 2){
        bytagName[c].style.backgroundColor = '#3568cf'
    }else{
        bytagName[c].style.backgroundColor = '#0047a9'
    }
}

let removendo = document.getElementById('remove1')
removendo.remove()

console.log(bytagName)


let recebeLista = document.getElementById('paiLista')

recebeLista.style.listStyle = 'none'