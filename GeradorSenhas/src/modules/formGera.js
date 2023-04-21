import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada')
const qtdChar = document.querySelector('.qtd-caracteres')
const checkMaiusculas = document.querySelector('.chk-maiusculas')
const checkMinusculas = document.querySelector('.chk-minusculas')
const checkNumbers = document.querySelector('.chk-numeros')
const checkSymbols = document.querySelector('.chk-simbolos')
const button = document.querySelector('.gerar-senha')

export default () => {

    button.addEventListener('click', () =>{

        const senha = geraSenha(
            qtdChar.value, 
            checkMaiusculas.checked,
            checkMinusculas.checked, 
            checkNumbers.checked,
            checkSymbols.checked
            );
            
        senhaGerada.innerHTML = senha
    });

}