// Seleciona os elementos do modal e do botão de fechar
const modal = document.getElementById('confirm-modal');
const closeModal = document.getElementById('modal-close');
const confirmButton = document.getElementById('modal-confirm');
const cancelButton = document.getElementById('modal-cancel');
const closeButton = document.getElementById('close-button');

// Adiciona um listener ao botão de fechar
closeButton.addEventListener('click', function() {
    modal.style.display = 'flex'; // Mostra o modal
});

// Adiciona um listener ao botão de fechar do modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Esconde o modal
});

// Adiciona um listener ao botão de confirmação
confirmButton.addEventListener('click', function() {
    window.history.back();
});

// Adiciona um listener ao botão de cancelamento
cancelButton.addEventListener('click', function() {
    modal.style.display = 'none'; // Esconde o modal
});
