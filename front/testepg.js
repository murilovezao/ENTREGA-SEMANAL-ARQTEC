// Função para alternar a visibilidade do contêiner de comentários
function toggleComment() {
    var commentContainer = document.getElementById("comment-container");
    commentContainer.style.display = (commentContainer.style.display === "block") ? "none" : "block";
}

// Função para ocultar o contêiner de comentários
function hideComment() {
    document.getElementById("comment-container").style.display = "none";
}


// Variável para rastrear se o canvas está ativado
let canvasActivated = false;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Função para alternar a ativação do canvas
function toggleCanvas() {
    if (canvasActivated) {
        sendCanvasBack();
        canvasActivated = false;
    } else {
        bringCanvasForward();
        canvasActivated = true;
    }
}

function bringCanvasForward() {
    canvas.style.zIndex = "1";
    canvas.style.pointerEvents = "auto";
}

function sendCanvasBack() {
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";
}

// Variáveis para o desenho no canvas
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function activateDrawingTool(e) {
    isDrawing = true;
    document.body.style.cursor = "crosshair";
    [lastX, lastY] = [e.clientX, e.clientY];
}

function deactivateDrawingTool() {
    isDrawing = false;
    document.body.style.cursor = "auto";
}

function draw(e) {
    if (!isDrawing) return;

    const newX = e.clientX;
    const newY = e.clientY;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(newX, newY);
    ctx.stroke();

    [lastX, lastY] = [newX, newY];
}

document.addEventListener('mousedown', activateDrawingTool);
document.addEventListener('mouseup', deactivateDrawingTool);
document.addEventListener('mousemove', draw);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Função para manipulação do botão 4 com confirmação
function handleButton4Click() {
    const userConfirmed = confirm('Você tem certeza de que deseja sair?');
    if (userConfirmed) {
        window.history.back();
    }
}

// Função executada quando o DOM é carregado
window.addEventListener('DOMContentLoaded', () => {
 
    const imageData = localStorage.getItem("imagem")

    if (imageData) {
        document.querySelector('.image').setAttribute('src', decodeURIComponent(imageData));

        
    }
    
});

function salvarComoImagem() {
    const conteudo = document.getElementById("FDS");
    html2canvas(FDS).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "pagina_como_imagem.png";
        link.click();
    });
}

// const captureButton = document.getElementById('captureButton');
//   const modal = document.getElementById('modal');
//   const overlay = document.getElementById('overlay');
//   const closeModal = document.getElementById('closeModal');

//   captureButton.addEventListener('click', () => {
//     modal.style.display = 'block';
//     overlay.style.display = 'block';
//   });

//   closeModal.addEventListener('click', () => {
//     modal.style.display = 'none';
//     overlay.style.display = 'none';
//   });

//   overlay.addEventListener('click', () => {
//     modal.style.display = 'none';
//     overlay.style.display = 'none';
//   });


// // Função para realizar o download da imagem
// function downloadImage() {
//   const image = canvas.toDataURL('image/png'); // Gera a URL da imagem no formato PNG

//   const link = document.createElement('a'); // Cria um link dinamicamente
//   link.href = image;
//   link.download = 'imagem-editada.png'; // Define o nome do arquivo
//   link.click(); // Simula o clique no link
// }

// // Botão para acionar o download
// document.getElementById('downloadBtn').addEventListener('click', downloadImage);



