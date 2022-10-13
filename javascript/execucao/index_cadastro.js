
import { RetornaErroPersonalizado } from "../modulos/RetornaErroPersonalizado.js";
import { validaConfirmaSenha } from "../modulos/validaConfirmaSenha.js";
import { inputEmMaiusculo } from "../modulos/inputEmMaiusculo.js";

var inputs = document.querySelectorAll('.campo__input');
var inputNome = document.getElementById('nome');

inputNome.oninput = inputEmMaiusculo;

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        var vazio = '';
        var campoLabel = input.parentNode.querySelector('.campo__label');
        var campoInput = input.parentNode.querySelector('.campo__input');
        var alerta = input.parentNode.querySelector('.alerta');

        if (input.value === vazio) {
            campoLabel.classList.add('alerta_label');
            campoInput.classList.add('alerta_input');
            alerta.classList.add('exibir_alerta');
            alerta.textContent = 'Preencha o campo';
        }
        else{
            var tipoDoInput = input.name;
            var padraoIncorreto = "";

            campoLabel.classList.remove('alerta_label');
            campoInput.classList.remove('alerta_input');
            alerta.classList.remove('exibir_alerta');
            alerta.textContent = vazio;

            // Exeção de validação do campo confirma senha, que deve ter seu valor igual a do campo senha
            switch (tipoDoInput) {
                case "confirmaSenha":
                    var valorSenha = document.getElementById("senha");
                    var valorConfirmaSenha = document.getElementById("confirmaSenha");

                    padraoIncorreto = validaConfirmaSenha(valorSenha, valorConfirmaSenha);
                    break;
                
                default:
                    padraoIncorreto = input.validity.patternMismatch;
                    break;
            }

            if (padraoIncorreto) {
                campoLabel.classList.add('alerta_label');
                campoInput.classList.add('alerta_input');
                alerta.classList.add('exibir_alerta');

                var mensagemPersonalizada = RetornaErroPersonalizado(input);
                alerta.textContent = mensagemPersonalizada;
            }
            else {
                campoLabel.classList.remove('alerta_label');
                campoInput.classList.remove('alerta_input');
                alerta.classList.remove('exibir_alerta');

                var mensagemPersonalizada = '';
                alerta.textContent = mensagemPersonalizada;
            }
        }
    })
})
