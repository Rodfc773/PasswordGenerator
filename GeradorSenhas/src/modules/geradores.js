
const rand = (min, max) => Math.floor(Math.random() * (max-min) + min)

const geraMaiuscula = () => String.fromCharCode(rand(65,92))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraSimbol = () => String.fromCharCode(rand(33, 48))
const geraNumber = () => String.fromCharCode(rand(48, 58))


export default  function geraSenha (qtd, maiusculas, minusculas, numeros, simbolos){


    let senha = ''
    qtd = Number(qtd)

    while(senha.length < qtd){

       if(numeros) senha = senha + geraNumber()
       if(minusculas) senha = senha + geraMinuscula()
       if(maiusculas) senha = senha + geraMaiuscula()
       if(simbolos) senha = senha + geraSimbol()

    }

    return senha.slice(0, qtd)
}
