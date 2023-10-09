// Adicione interações e animações aqui, se necessário
document.addEventListener('DOMContentLoaded', function () {
    // Exemplo de interação: envio do formulário de contato
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });
});