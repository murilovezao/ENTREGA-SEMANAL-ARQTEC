document.addEventListener("DOMContentLoaded", async function mostrarDados(event){
    let UserId = localStorage.getItem("id_user")

    let response = await fetch(`http://localhost:3006/api/getUser/${UserId}`, {
        method: 'GET',
        headers: {"Content-type": "application/json;charset=UTF-8"}
    })

    let content = await response.json()

    if(content.success) {
        let email = content.data[0].email
        let senha = content.data[0].senha

        document.getElementById('user-email').textContent = email
        document.getElementById('user-password'). textContent = senha
    }

})

// inicio.js

// Exibir ou esconder o card ao clicar na imagem
document.getElementById('profile-button').addEventListener('click', () => {
    const profileCard = document.getElementById('profile-card');
    if (profileCard.style.display === 'none') {
        profileCard.style.display = 'block';
    } else {
        profileCard.style.display = 'none';
    }
});


document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('profile-card').style.display = 'none';
});

// Chame a função showProfile após a lógica de login bem-sucedid