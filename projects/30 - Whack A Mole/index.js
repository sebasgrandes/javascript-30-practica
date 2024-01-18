const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;

// utilidad de tiempo para saber cuanto tiempo estaran en la pantalla los moles
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    // numero entre 0 y 5
    const idx = Math.round(Math.random() * holes.length);
    const hole = holes[idx];
    // por si sale algun repetido
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole; /* retornamos ese div */
}

function peep() {
    const time = randomTime(20, 1000);
    const hole = randomHole(holes);
    hole.classList.add("up");
    // gracias a esto continuamos con el juego
    setTimeout(() => {
        hole.classList.remove("up");
        // si el juego no ha terminado (con timeup true), sigue ejecutandolo
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep(); /* se ejecuta la funcion una vez pero el intervalo de adentro se ejecuta hasta que el tiempo expire */
    setTimeout(() => {
        timeUp = true;
    }, 10000);
}

function bonk(e) {
    // console.log(e);
    if (!e.isTrusted) return console.log("Tramposo!");
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
}

moles.forEach((mole) => {
    mole.addEventListener("click", bonk);
});
