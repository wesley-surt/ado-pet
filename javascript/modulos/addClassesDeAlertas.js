
export var addClassesDeAlertas = (label, input, alerta, mensagemParaAlteracao) => {
    label.classList.add('alerta_label');
    input.classList.add('alerta_input');
    alerta.classList.add('exibir_alerta');
    alerta.textContent = mensagemParaAlteracao;
}
