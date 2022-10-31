export var confereValidacaoFormulario = (inputs) => {
    var tudoCerto = false;

    for (let cont = 0; cont < inputs.length; cont++) {
        var input = inputs[cont];
        var naoEstaVazio = input.validity.valueMissing;
        var estaValido = input.validity.valid;

        //foi criado um caso em particular para testar a validades dos inputs, caso um deles seja de nome confirmaSenha
        if (input.name === 'confirmaSenha') {
            var valorSenha = inputs[2].value;
            var valorConfirmaSenha = inputs[3].value;
            
            if (!naoEstaVazio && valorSenha == valorConfirmaSenha) {
                tudoCerto = true;
            }
            else {
                return tudoCerto = false;
            }
        }
        else {
            if (!naoEstaVazio && estaValido) {
                tudoCerto = true;
            }
            else {
                return tudoCerto = false;
            }
        }
        console.log(input.name);
    }
    return tudoCerto;
}