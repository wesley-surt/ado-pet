
import { RetornaErroPersonalizado } from "../modulos/RetornaErroPersonalizado.js";
import { validaConfirmaSenha } from "../modulos/validaConfirmaSenha.js";
import { inputEmMaiusculo } from "../modulos/inputEmMaiusculo.js";
import { addClassesDeAlertas } from "../modulos/addClassesDeAlertas.js";
import { removeClassesDeAlertas } from "../modulos/removeClassesDeAlertas.js";

var inputs = document.querySelectorAll('.campo__input');
var inputNome = document.getElementById('nome');

inputNome.oninput = inputEmMaiusculo;

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        var campoLabel = input.parentNode.querySelector('.campo__label');
        var campoInput = input.parentNode.querySelector('.campo__input');
        var alerta = input.parentNode.querySelector('.alerta');
        var textoParaPeencher = 'Preencha o campo';
        var vazio = '';

        if (input.value === vazio) {
            addClassesDeAlertas(campoLabel, campoInput, alerta, textoParaPeencher);
        }
        else{
            removeClassesDeAlertas(campoLabel, campoInput, alerta, vazio);

            var tipoDoInput = input.name;
            var padraoIncorreto = '';

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
                var mensagemPersonalizada = RetornaErroPersonalizado(input);
                addClassesDeAlertas(campoLabel, campoInput, alerta, mensagemPersonalizada);
            }
            else {
                removeClassesDeAlertas(campoLabel, campoInput, alerta, vazio);
            }
        }
    })
})
