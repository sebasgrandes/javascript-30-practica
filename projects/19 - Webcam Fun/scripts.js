// const { get } = require("browser-sync");

const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
    // con .getUserMedia solicitamos acceso a los dispositivos
    // con .then cuando se concede el acceso, la promesa se resuelve con un objeto MediaStream que es el flujo de medios capturados
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((localMediaStream) => {
            // console.log(localMediaStream);
            // video.src = window.URL.createObjectURL(localMediaStream);
            // con video.srcObject asignamos el objeto MediaStream al atributo srcObject de un elemento de video HTML... esto conecta el flujo de video de la cámara a la etiqueta de video para que pueda ser reproducido
            video.srcObject = localMediaStream;

            video.play(); /* iniciamos la reproduccion del video */
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        pixels = rgbSplit(pixels);
        // pixels = redEffect(pixels);
        ctx.globalAlpha = 0.8;
        pixels = greenScreen(pixels);

        ctx.putImageData(pixels, 0, 0);
    }, 20);
}

function takePhoto() {
    // reproduce el sonido
    snap.currentTime = 0;
    snap.play();

    // saca los datos del lienzo
    const data =
        canvas.toDataURL(
            "image/jpeg"
        ); /* convertimos el contenido del elemento canvas en una url de datos (string) que representa una imagen jpeg */
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute(
        "download",
        "handsome"
    ); /* al agregar este atributo al enlace, le decimos que cuando haga click en el link, se descargue el recurso al que apunta */
    link.innerHTML = `<img src="${data}" alt="Handsome Man"/>`;
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll(".rgb input").forEach((input) => {
        levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (
            red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax
        ) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }

    return pixels;
}

getVideo();
video.addEventListener("canplay", paintToCanvas);
