//funcao
function soma(num1, num2){//parametros
  var num1
  var num2

  return num1 + num2; // 5
}
console.log(soma(2, 3, 2)) // com
//console.log(soma) sem parenteses
console.clear()
function media(num1, num2, num3, num4){
    var num1
    var num2
    var num3
    var num4

    return (num1 + num2 + num3 + num4) / 4;
}
console.log(media(2,3,4,5))

 console.clear()

 const media2 = (n1,n2,n3,n4) => {
    return(n1 + n2 + n3 + n4) / 4;
 }
 console.log(media2(5,5,5,5))

 console.clear()

function onloadTela() {

    alert("Sua tela foi caregada com sucesso! Seja Bem-Vindo(a)")
    console.log("Carregou a tela com sucesso!")
}
console.clear()

const clique = () => {
    alert("voce clicou no botão")
    console.log("voce clicou no botão")
}