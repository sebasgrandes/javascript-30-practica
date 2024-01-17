const timeLeft = document.querySelector(".display__time-left");
const timeEnd = document.querySelector(".display__end-time");
// console.log(timeLeft);

const botones = document.querySelectorAll(".timer__button");

let intervalox;

function timer(segundos) {
    const acumulado = Date.now() + segundos * 1000;
    displayTimeLeft(
        segundos
    ); /* para mostrar (automaticamente) el primer valor que introducimos (dado que set interval se ejecuta pasado 1 seg) */
    // si el intervalox ya existe entonces lo limpiamos... para que no genere conflicto al establecer un nuevo tiempo al tocar el boton
    if (intervalox) {
        clearInterval(intervalox);
    }
    intervalox = setInterval(() => {
        const secondsLeft = Math.round((acumulado - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(
                intervalox
            ); /* detiene el intervalor de tiempo establecido con setInterval */
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
    displayEndTime(acumulado);
}

// funcion para mostrar en pantalla
function displayTimeLeft(segundos) {
    const minutosDisplay = Math.floor(segundos / 60);
    const segundosDisplay =
        segundos %
        60; /* despues de dividir los segundos totales entre 60... obtenemos los segundos que quedan... (el residuo) */
    const display = `${minutosDisplay}:${
        segundosDisplay < 10 ? "0" : ""
    }${segundosDisplay}`;
    document.title = display;
    timeLeft.textContent = display;
    // console.log({ minutosDisplay, segundosDisplay });
    // displayEndTime(segundos);
}

function displayEndTime(horaFutura) {
    // tenemos como argumento la hora futura
    const end = new Date(
        horaFutura
    ); /* esto me crea una instancia de la hora futura */
    const hour = end.getHours();
    const minutos = end.getMinutes();
    timeEnd.textContent = `Vuelve a las: ${hour > 12 ? hour - 12 : hour}:${
        minutos < 10 ? "0" : ""
    }${minutos} ${hour >= 12 ? "pm" : "am"}`;
}

botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        const segundosBoton = Number(e.target.dataset.time);

        timer(segundosBoton);
        // console.log();
    });
});

// puedes seleccionar asi sin mas por el atributo name
document.customForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // el this funciona con la function declaration
    console.log(this);
    timer(Number(this.minutes.value) * 60);
    this.reset();
});

// timer(360);
