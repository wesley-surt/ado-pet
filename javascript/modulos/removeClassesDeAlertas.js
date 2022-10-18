
export var removeClassesDeAlertas = (label, input, alerta, mensagemParaAlteracao) => {
    label.classList.remove('alerta_label');
    input.classList.remove('alerta_input');
    alerta.classList.remove('exibir_alerta');
    alerta.textContent = mensagemParaAlteracao;
}
