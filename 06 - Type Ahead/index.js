const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const ciudades = [];
const campo = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

async function app() {
    await fetch(endpoint)
        .then((res) => res.json())
        .then((data) => ciudades.push(...data));
    // * sin usar this.value
    // campo.addEventListener("input", (e) => {
    //     imprimirHTML(e.target.value);
    // });

    // * USANDO this.value
    campo.addEventListener(
        "input",
        imprimirHTML
        // console.log(filtrado);
    );
}

app();

function encontrar(palabra, ciudades) {
    return ciudades.filter((place) => {
        const regex = new RegExp(palabra, "gi");
        // console.log(e.city.match(regex)); // imprime la palabra del elemento coincidente. si no lo encuentra, retorna "null"
        // * recuerda que filter retorna aquellos que CUMPLEN con la expresion del return de abajo
        return place.city.match(regex) || place.state.match(regex); // match sirve para encontrar en un string el regex
    });
}

function imprimirHTML() {
    // ! this hace referencia al campo de entrada (es como usar "e.target", pero sin tener que definir "e")... y .value al valor actual del texto dentro de ese campo
    const palabra = this.value;
    // console.log(palabra);
    // guardo mis ciudades ciltradas por la palabra
    const filtrado = encontrar(palabra, ciudades);

    // coincidencia es un array de elementos html generados por cada ciudad o estado que cumplan con mi regex, a partir de "filtrado"
    const coincidencia = filtrado
        .map((place) => {
            const regex = new RegExp(palabra, "gi");

            const ciudadHighlight = place.city.replace(
                regex,
                `<span class="hl">${palabra}</span>`
            );
            const estadoHighlight = place.state.replace(
                regex,
                `<span class="hl">${palabra}</span>`
            );
            return `
                <li>
                    <span class="name">${ciudadHighlight}, ${estadoHighlight}</span>
                    <span class="population">${place.population}</span>
                </li>
            `;
        })
        .join("");
    // .join une cada elemento del array usando como caracter delimitador aquel que le establezcas, en este caso es un "", o sea, nada
    // console.log(coincidencia);
    suggestions.innerHTML = coincidencia;
}
