console.log("aslkdlaskldsa");

const inputSpacing = document.querySelector("#spacing");
const inputBlur = document.querySelector("#blur");
const inputBase = document.querySelector("#base");

// inputSpacing.addEventListener("input", (e) => {
//     const valor = e.target.value;
//     console.log(valor);
//     document.documentElement.style.setProperty("--spacing", `${valor}px`);
// });
// inputBlur.addEventListener("input", (e) => {
//     const valor = e.target.value;
//     console.log(valor);
//     document.documentElement.style.setProperty("--blur", `${valor}px`);
// });
// inputBase.addEventListener("input", (e) => {
//     const valor = e.target.value;
//     console.log(valor);
//     document.documentElement.style.setProperty("--base", `${valor}`);
// });

const campos = Array.from(document.querySelectorAll(".controls input"));
console.log(campos);

campos.forEach((input) => {
    input.addEventListener("input", funcionCambio);
});

function funcionCambio(e) {
    document.documentElement.style.setProperty(
        `--${e.target.id}`,
        `${e.target.value}${e.target.id !== "base" ? "px" : ""}`
    );
}
