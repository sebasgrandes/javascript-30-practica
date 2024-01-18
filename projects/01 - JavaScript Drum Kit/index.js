const keys = Array.from(document.querySelectorAll(".keys"));
// console.log(keys);

window.addEventListener("keydown", playSound);

keys.forEach((key) => {
    // onClick();
    key.addEventListener("transitionend", removeTransition);
});

function playSound(e) {
    const dataKey = e.keyCode;
    const divKey = document.querySelector(`div[data-key="${dataKey}"]`);
    const audioKey = document.querySelector(`audio[data-key="${dataKey}"]`);

    if (!audioKey) return;

    // añadimos la clase que le da un "transform" y color... y como está en el elemento "key" y este tiene un ".key", entonces se activará la "transition"
    divKey.classList.add("playing");
    // lo obligamos a ponerse en el tiempo 0 para que reaccione al instante con nuestra tecla
    audioKey.currentTime = 0;
    // reproducimos el audio
    audioKey.play();
    // console.log(audioKey);
    // console.log(divKey);
}

function removeTransition(e) {
    // e.preventDefault();
    // si el valor (llamado "transform") de la propiedad del elemento html NO cambio...
    if (e.propertyName !== "transform") return;
    // console.log(e.target);
    e.target.classList.remove("playing");
    console.log("object");
    // console.log("Transicion terminada");
    // console.log(e.propertyName);
}
