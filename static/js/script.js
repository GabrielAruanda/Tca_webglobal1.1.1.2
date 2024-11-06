$(document).ready(function() {
    // Verifica se existe um alerta de sucesso na página
    if ($('.alert-success').length) {
        // Se o alerta de sucesso for encontrado, realiza um efeito de rolagem suave
        // Para levar o usuário até o topo do alerta
        $('html, body').animate({
            scrollTop: $('.alert-success').offset().top  // A rolagem é feita até a posição do alerta de sucesso
        }, 1000); // O valor 1000 indica a duração da animação em milissegundos (1000ms = 1 segundo)
    }
});
