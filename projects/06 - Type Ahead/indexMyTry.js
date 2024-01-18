const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let array = [];

let ciudades = [];
const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

search.addEventListener("input", (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    encontrar(e.target.value);
});

async function funzi() {
    await fetch(endpoint)
        .then((res) => res.json())
        .then((dato) => array.push(...dato));

    array.forEach((e) => {
        ciudades.push(e.city);
    });
    // console.log(ciudades);
}
funzi();

function encontrar(texto) {
    // console.log(ciudades);
    const filtrado = ciudades.filter((e) => e.toLowerCase().includes(texto));
    console.log(filtrado);

    renderizarHTML(filtrado);
}

function renderizarHTML(filtrado) {
    limpiarHTML();
    filtrado.forEach((e) => {
        const li = document.createElement("li");
        li.textContent = e;
        suggestions.appendChild(li);
    });
}

function limpiarHTML() {
    while (suggestions.firstChild) {
        suggestions.removeChild(suggestions.firstChild);
    }
}
