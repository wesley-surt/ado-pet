export var confereValidacaoFormulario = (inputs) => {
    var tudoCerto = false;

    for (let cont = 0; cont < inputs.length; cont++) {
        var input = inputs[cont];
        var naoEstaVazio = input.validity.valueMissing;
        var estaValido = input.validity.valid;

        if (!naoEstaVazio && estaValido) {
            tudoCerto = true;
        }
        else {
            return tudoCerto = false;
        }
    }
    return tudoCerto;
}