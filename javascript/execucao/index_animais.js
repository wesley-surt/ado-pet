
var filtro = document.querySelector('.filtrar');

filtro.addEventListener('change', function(e) {
    var valorDoFiltro = filtro.options[filtro.selectedIndex].text;
    var cards = document.querySelectorAll('.card');

    if (valorDoFiltro == 'Mostrar Todos') {
        cards.forEach(card => {
            card.classList.remove('ocultar_card');
        });
    }
    else{
        cards.forEach(card => {
            var estado = card.querySelector('.estado').textContent;
            
            if (valorDoFiltro == estado) {
                card.classList.remove('ocultar_card');
            }
            else{
                card.classList.add('ocultar_card');
            }
        });
    }
});
