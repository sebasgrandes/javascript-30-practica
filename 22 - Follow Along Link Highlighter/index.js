const links = document.querySelectorAll("a");
console.log(links);

const span = document.createElement("span");
span.classList.add("highlight");
// span.textContent = "asdasd";
// span.display = "10px";
// span.style.width = "250px";
// span.style.height = "50px";

document.body.appendChild(span);

document.addEventListener("DOMContentLoaded", () => {
    links.forEach((a) => {
        a.addEventListener("mouseover", activador);
    });
});

function activador(e) {
    // ! para mas info sobre los metodos usados ve a notas.mkd
    console.log(e);
    // span.style.width = `${e.target.clientWidth}px`;
    // span.style.height = `${e.target.clientHeight}px`;
    // console.log(e.target.clientWidth, e.target.clientHeight);
    // * getBoundingClientRect().width calcula las dimensiones propias del elemento, en el preciso momento
    span.style.width = `${e.target.getBoundingClientRect().width}px`;
    span.style.height = `${e.target.getBoundingClientRect().height}px`;
    // offsetLeft toma como referencia a un padre que contiene al elemento
    // console.log(e.target.offsetLeft, e.target.offsetTop);
    // * getBoundingClientRect().left toma como referencia al viewport (ventana global del navegador)
    span.style.transform = `translate(${
        e.target.getBoundingClientRect().left
    }px, ${e.target.getBoundingClientRect().top + window.scrollY}px)`;
}
