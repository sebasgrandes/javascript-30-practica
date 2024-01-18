let msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');

// seleccionamos todos los elementos: 1. de tipo rango 2. con el atributo text
const options = Array.from(
    document.querySelectorAll('[type="range"], [name="text"]')
);
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
// const textarea = document.querySelector("[name='text']");
let texto = document.querySelector("[name='text']").value;

// ! cuando las voces se han cargado completamente... podemos usarlas
window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
    // console.log(listavoces);
    voices.forEach((voz, index) => {
        // console.log(index);
        // voices.push(voz);
        // console.log(voices);
        voicesDropdown.innerHTML += `
            <option value="${index}">${voz.name}</option>
        `;
    });
};
let vozselected;

voicesDropdown.addEventListener("change", (e) => {
    // console.log(e.target.value);
    window.speechSynthesis.cancel();

    vozselected = voices[e.target.value];
    // console.log(vozselected);
    reproducirMensaje(vozselected);
});

speakButton.addEventListener("click", () => {
    reproducirMensaje(vozselected);
});

stopButton.addEventListener("click", () => {
    window.speechSynthesis.cancel();
});
options.forEach((option) => {
    option.addEventListener("change", (e) => {
        window.speechSynthesis.cancel();

        // console.log(e.target.value, e.target.name);
        if (e.target.name === "text") {
            texto = e.target.value;
            reproducirMensaje(vozselected);
            return;
        }
        msg[e.target.name] = e.target.value;
        reproducirMensaje(vozselected);
    });
});
// let texto;
function reproducirMensaje(vocecita) {
    if (!vocecita) {
        vocecita = voices[0];
    }
    msg.text = texto;
    msg.voice = vocecita;
    window.speechSynthesis.speak(msg);
}
