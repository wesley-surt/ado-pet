
export var validaConfirmaSenha = (valorSenha, valorConfirmaSenha) => {
    if (valorSenha.value == valorConfirmaSenha.value) {
        return false;
    }
    else {
        return true;
    }
}
