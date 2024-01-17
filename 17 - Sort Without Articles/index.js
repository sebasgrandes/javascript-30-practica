const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog",
];
// recuerda que aquel que se mueve al ultimo o primero en la lista sorteada por .sort siempre es el 1er elemento, es decir: band1
const wordsSorted = bands.sort((band1, band2) => {
    return correccion(band1) > correccion(band2) ? 1 : -1;
});

// el ^ indica que se debe buscar la coincidencia al principio del string
function correccion(bandex) {
    return bandex.replace(/^(the |an |a )/i, "").trim();
}
console.log(wordsSorted);
let html = "";
// la ejecucion de codigo en js se realiza de forma secuencial (y en un solo hilo) por lo que al llegar a este punto ya deberia haberse terminado las anteriroes y se deberia tener listo las palabras filtradas (wordSorted)
document.addEventListener("DOMContentLoaded", () => {
    wordsSorted.forEach((word) => {
        html += `<li>${word}</li>`;
    });
    document.querySelector("#bands").innerHTML = html;
});
