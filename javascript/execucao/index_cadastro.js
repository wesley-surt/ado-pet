
var inputs = document.querySelectorAll('.campo__input');

inputs.forEach(input => {
    var tipoDoInput = input.name;
    var vazio = '';
    var padraoIncorreto = false;
    var campoLabel = input.parentNode.querySelector('.campo__label');
    var campoInput = input.parentNode.querySelector('.campo__input');
    var alerta = input.parentNode.querySelector('.alerta');

    input.addEventListener('blur', () => {
        if (input.value === vazio) {
            campoLabel.classList.add('alerta_label');
            campoInput.classList.add('alerta_input');
            alerta.classList.add('exibir_alerta');
            alerta.textContent = 'Preencha o campo';
        }
        else{
            campoLabel.classList.remove('alerta_label');
            campoInput.classList.remove('alerta_input');
            alerta.classList.remove('exibir_alerta');
            alerta.textContent = vazio;

            switch (tipoDoInput) {
                case "confirmaSenha":
                    padraoIncorreto = validaConfirmaSenha(input); 
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
        }


    })
})

var validaConfirmaSenha = (input) => {
    var valorSenha = document.querySelector(".senha").textContent;
    var valorConfirmaSenha = input.textContent;

    if (valorConfirmaSenha == valorSenha) {
        return false;
    }
    else {
        return true;
    }
}

var RetornaErroPersonalizado = (input) => {
    var tipoDoInput = input.name;

    if (tipoDoInput in listaDeErrosPersonalizados) {
        var mensagemPersonalizada = listaDeErrosPersonalizados[tipoDoInput];
        return mensagemPersonalizada;
    }
}

var listaDeErrosPersonalizados = {
    email: 'O campo email está invalido.',
    nome: 'O campo nome possui alguma irregularidade.',
    senha: 'A senha deve conter no mínimo 6 digitos',
    confirmaSenha: 'A senha informada não é idêntica a senha escolhida.'
}