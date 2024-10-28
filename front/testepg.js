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
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const imageData = urlParams.get('image');

    if (imageData) {
        document.querySelector('.image').setAttribute('src', decodeURIComponent(imageData));
    }
});


function downloadPDF() {
    const item = document.getElementById(".card");
    console.log("fodase")
  
    var opt = {
      margin: 1,
      filename: "myfile.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
  
    html2pdf().set(opt).from(item).save();
}