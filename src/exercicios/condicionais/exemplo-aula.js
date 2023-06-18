//se a passagem for 10.00 iremos ao arraiá (condicional simples if)
// se a passagem for diferente de 100.00 ele vai entrar na condicional composta else)
//se a passagem estiver dentro do orçamento mas estiver esgotado (vai entrar na condional alinhada else.if)

let ingresso = 100.00; 
let ingressoEsgotado = true


if (ingresso <= 10.00) {
console.log("Vamos pro show da Taylor Swift")
} 
else if(ingresso <= 10.00 && ingressoEsgotado == true){
    console.log("Não vamos pro show da Taylor porque a passagem esgotou")
}

else{
    console.log("Não vamos pro show, é muito caro")
}

