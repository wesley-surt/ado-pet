import { confereValidacaoFormulario } from "../modulos/confereValidacaoFormulario.js";
var botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.onclick = (evento) => {
        var nomeDaPagina = document.querySelector('.pagina').ariaValueText;
    
        if (nomeDaPagina === 'cadastro') {
            var inputs = document.querySelectorAll('.campo__input');
            var formularioValido = confereValidacaoFormulario(inputs);

            if (formularioValido) {
                window.location = 'perfil.html';
            }
        }
        else if (nomeDaPagina === 'login') {
            var inputs = document.querySelectorAll('.campo__input');
            var formularioValido = confereValidacaoFormulario(inputs);

            if (formularioValido) {
                window.location = 'perfil.html';
            }
        }
        else if (nomeDaPagina === 'inicio') {
            if (evento.target.name === 'login') {
                window.location = 'login.html';
            }
            else if (evento.target.name === 'cadastro') {
                window.location = 'cadastro.html';
            }
        }
    }
});
