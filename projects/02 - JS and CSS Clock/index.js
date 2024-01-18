const second_hand = document.querySelector(".second-hand");
const min_hand = document.querySelector(".min-hand");
const hour_hand = document.querySelector(".hour-hand");
setInterval(setDate, 1000);
// setInterval(minHand, 1000);
// setInterval(hourHand, 1000);

let vueltas360second = 0;
let vueltas360min = 0;
let vueltas360hour = 0;
function setDate() {
    const date = new Date();
    // * SEGUNDOS
    const segundos = date.getSeconds();
    const segundosaGrados = (segundos / 60) * 360; // va de 6 en 6: desde el 0 al 360

    if (segundosaGrados === 0) {
        vueltas360second = vueltas360second + 360;
    }
    // se van acumulando los grados que gira el reloj
    const gradosqueGiraSecond = segundosaGrados + 90 + vueltas360second; // vueltas360second actua como un factor de corrección, de tal manera que, cada que segundosaGrados sea 0... entonces vueltas360second se incrementará en 360 cada vez... para compensar el reinicio que se ocasiona en los gradosqueGira debido a que segundosaGrandos va de 0 a 360
    // console.log(gradosqueGira);
    second_hand.style.transform = `rotate(${gradosqueGiraSecond}deg)`;

    // * MINUTOS
    const minutos = date.getMinutes();
    // console.log(minutos);
    const minutosaGrados = (minutos / 60) * 360;
    const gradosqueGiraMin = minutosaGrados + 90;
    min_hand.style.transform = `rotate(${gradosqueGiraMin}deg)`;

    // * HORAS
    const hora = date.getHours();
    // console.log(hora);
    const horaaGrados = (hora / 12) * 360;
    const gradosqueGiraHour = horaaGrados + 90 + vueltas360hour;
    hour_hand.style.transform = `rotate(${gradosqueGiraHour}deg)`;
}
