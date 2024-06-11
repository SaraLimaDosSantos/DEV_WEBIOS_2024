//primeiro botão
function recebeImg() {
    let img = document.createElement("img");
    img.src='https://www.google.com/url?sa=i&url=https%3A%2F%2Frollingstone.uol.com.br%2Fnoticia%2Fumbrella-academy-outro-integrante-do-grupo-causou-o-apocalipse-nos-quadrinhos%2F&psig=AOvVaw354p_lldbX0GL1d4omp8s6&ust=1718152408834000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjw-9Gm0oYDFQAAAAAdAAAAABAn'
    document.body.appendChild(img);

    let fundo = document.getElementById('corpo')
    fundo.style.backgroundColor = '#262525'
}

//segundo botão
function recebeNome(){
    let nome = window.prompt('digite o seu nome')
    let mostraNome = document.createElement('p')
    mostraNome.innerText = `Olà ${nome}, Bem-vindo a nossa academia`
    document.body.appendChild(mostraNome)
}

//terceito botão
function recebeNum(){
    let num = window.prompt('digite um número')
    if(num <= 10){
        for(let i = 1;i <= 10;i++){
            let mostraTabuada = document.createElement('p')
            mostraTabuada.innerText = `${num} x ${i} = ${num * i}`
            document.body.appendChild(mostraTabuada)
        }
    }
}