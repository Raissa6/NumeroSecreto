let tentativas = 1
let chute
alert('Boas vindas ao jogo do número secreto')

let nome = prompt("Qual seu nome Querido(a)? ");

let numQuant = prompt ("Vamos sortear um número, de 0 a quanto?")
let numeroSecreto = parseInt(Math.random() * numQuant+1)

while (chute != numeroSecreto) {
    let chute = prompt(`Escolha um número entre 0 e ${numQuant}`)
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor')
        } else {
            alert('O número secreto é maior')
        }
    }
    tentativas++
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)