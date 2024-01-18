const video = document.querySelector("video");
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");

// console.log(video);
// console.log(speed);
// console.log(speedBar);

speedBar.style.minHeight = "";

speed.addEventListener("mousemove", (e) => {
    // const alturaSpeed = e.target.getBoundingClientRect().height;

    const alturaSpeed = speed.getBoundingClientRect().height;

    // offsetY devuelve la posición vertical del puntero del mouse en relación con el elemento objetivo del evento.
    const posicionCursor = e.offsetY;
    const porcentajeBarra = Math.round((posicionCursor / alturaSpeed) * 100);

    speedBar.style.height = `${porcentajeBarra}%`;
    // console.log(porcentajeBarra);

    const valorBarra = ((porcentajeBarra * 5) / 100).toFixed(1);
    speedBar.textContent = `${valorBarra}x`;
    reducirVelocidad(valorBarra);

    // clientY devuelve la posición vertical del puntero del mouse en relación con el viewport del navegador
    // console.log(e.clientY);
});

function reducirVelocidad(valor) {
    if (valor === 0.05) {
        return;
    }
    video.playbackRate = valor;
}
