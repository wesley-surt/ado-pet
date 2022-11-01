import { confereValidacaoFormulario } from "../modulos/confereValidacaoFormulario.js";

var botoes = document.querySelectorAll('.botao');
var janela = document.querySelector('.janela');
var botaoDeFecharJanela = document.getElementById('pop-up__botao');

botaoDeFecharJanela.onclick = function () {
    janela.classList.remove('abre_janela');
};

    botao.onclick = () => {
        var nomeDaPagina = document.querySelector('.pagina').ariaValueText;
    
        if (nomeDaPagina === 'cadastro') {
            var inputs = document.querySelectorAll('.campo__input');
            var formularioValido = confereValidacaoFormulario(inputs);

            if (formularioValido) {
                window.location = 'perfil.html';
            }
            else{
                janela.classList.add('abre_janela');
            }
        }
        else if (nomeDaPagina === 'login') {
            var inputs = document.querySelectorAll('.campo__input');
            var formularioValido = confereValidacaoFormulario(inputs);

            if (formularioValido) {
                window.location = 'perfil.html';
            }
            else{
                janela.classList.add('abre_janela');
            }
        }
        else if (nomeDaPagina === 'perfil') {
            var inputs = document.querySelectorAll('.campo__input');
            var formularioValido = confereValidacaoFormulario(inputs);

            if (formularioValido) {
                alert('Perfil salvo com sucesso!');
                window.location.reload();
            }
            else{
                janela.classList.add('abre_janela');
            }
        }
        else if (nomeDaPagina === 'mensagem') {
            var inputs = document.querySelectorAll('.campo__input');
            var formularioValido = confereValidacaoFormulario(inputs);

            if (formularioValido) {
                alert('Mensagem evniada com sucesso!');
                window.location.reload();
            }
            else{
                janela.classList.add('abre_janela');
            }
        }
    }
