// inicio.js

// Simulação de dados de login
const userEmail = "usuario@exemplo.com"; // Substitua pelo email real
const userPassword = "senhaSecreta"; // Substitua pela senha real

// Exibir card de perfil após o login
function showProfile() {
    document.getElementById('user-email').innerText = userEmail;
    document.getElementById('user-password').innerText = userPassword; // Apenas para exemplo
}

// Exibir ou esconder o card ao clicar na imagem
document.getElementById('profile-button').addEventListener('click', () => {
    const profileCard = document.getElementById('profile-card');
    if (profileCard.style.display === 'none') {
        profileCard.style.display = 'block';
        showProfile(); // Chame a função para preencher os dados
    } else {
        profileCard.style.display = 'none';
    }
});


document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('profile-card').style.display = 'none';
});

// Chame a função showProfile após a lógica de login bem-sucedido
showProfile();
