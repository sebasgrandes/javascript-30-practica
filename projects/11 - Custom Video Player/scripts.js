const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const playBtn = player.querySelector(".player__button.toggle");
const fullscreenBtn = player.querySelector(".player__button.fullscreen");
const skips = Array.from(player.querySelectorAll("[data-skip]"));
const barra = player.querySelector(".progress__filled");
const barraBehind = player.querySelector(".progress");
const ranges = player.querySelectorAll(".player__slider");

video.addEventListener("click", pausarVideo);
playBtn.addEventListener("click", pausarVideo);
video.addEventListener("timeupdate", actualizarBarra);
barraBehind.addEventListener("click", moverBarra);
fullscreenBtn.addEventListener("click", fullScreen);

ranges.forEach((input) => {
    input.addEventListener("input", (e) => {
        video[e.target.name] = e.target.value;
    });
});

skips.forEach((skip) => {
    skip.addEventListener("click", (e) => {
        const salto = Number(e.target.dataset.skip);
        video.currentTime += salto;
        video.play();
        // actualizarBarra();
    });
});

function pausarVideo() {
    if (!video.paused) {
        video.pause();
        playBtn.textContent = "►";
        // actualizarBarra();
        return;
    }
    video.play();
    actualizarBarra();
    playBtn.textContent = "⏸️";
}

function moverBarra(e) {
    const porcentajeTranscurrido = e.offsetX / barraBehind.offsetWidth;
    const segundoAdelantado = porcentajeTranscurrido * video.duration;
    video.currentTime = segundoAdelantado;
    video.play();
    playBtn.textContent = "⏸️";
    actualizarBarra();
}

function actualizarBarra() {
    // console.log("aaaaa");
    if (!video.paused) {
        const timeactualVideo = video.currentTime;
        const avance = (timeactualVideo / video.duration) * 100;
        // console.log(avance);
        barra.style.flexBasis = `${avance}%`;
        return;
    }
}

function fullScreen() {
    video.requestFullscreen();
}
