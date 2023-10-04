
const frases = [
    "Lorem ipsum dolor sit amet",
    "consectetur adipiscing elit",
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam",
    "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
];

const divFrase = document.getElementById("subtitulo")

function mostrarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);

    const fraseAleatoria = frases[indiceAleatorio];

    divFrase.textContent = fraseAleatoria;
}

mostrarFraseAleatoria();

setInterval(mostrarFraseAleatoria, 3000);
