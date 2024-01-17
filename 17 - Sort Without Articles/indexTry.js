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
const words = ["The ", "A ", "An "];

function iniciaCon(bandex) {
    const bandita = words
        .map((word) => {
            if (bandex.startsWith(word)) {
                return bandex.slice(word.length);
            } else {
                return;
            }
        })
        .filter((e) => e !== undefined);
    return bandita[0] ? bandita[0] : bandex;
}

// recuerda que aquel que se mueve al ultimo o primero en la lista sorteada por .sort siempre es el 1er elemento, es decir: band1
const wordsSorted = bands.sort((band1, band2) => {
    band1 = iniciaCon(band1);
    band2 = iniciaCon(band2);
    // console.log(band1);
    // console.log(band2);
    return band1 > band2 ? 1 : -1;
});

let html = "";
// la ejecucion de codigo en js se realiza de forma secuencial (y en un solo hilo) por lo que al llegar a este punto ya deberia haberse terminado las anteriroes y se deberia tener listo las palabras filtradas (wordSorted)
document.addEventListener("DOMContentLoaded", () => {
    wordsSorted.forEach((word) => {
        html += `<li>${word}</li>`;
    });
    document.querySelector("#bands").innerHTML = html;
});

// * idea inicial jeje
// function iniciaCon(bandex) {
//     if (bandex.startsWith("The")) {
//         return bandex.slice(4);
//     }
//     if (bandex.startsWith("A")) {
//         return bandex.slice(2);
//     }
//     if (bandex.startsWith("An")) {
//         return bandex.slice(3);
//     }
//     return bandex;
// }
