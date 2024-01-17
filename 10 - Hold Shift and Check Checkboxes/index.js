const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
// console.log(checkboxes);

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", funcionalidad);
    // console.log(checkbox);
});

let firstChecked;
let lastChecked;
let inBetween = false;
function funcionalidad(e) {
    // almaceno mi checkbox clicado
    let checkboxClicado = this; /* si esta checkado */
    if (e.shiftKey && checkboxClicado.checked) {
        lastChecked = checkboxClicado;
        checkboxes.forEach((checkbox) => {
            // console.log(checkbox);
            if (checkbox === firstChecked || checkbox === lastChecked) {
                inBetween = !inBetween;
                // console.log("comienza el clicado");
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
        return;
    }
    if (e.shiftKey && checkboxClicado.checked === false) {
        lastChecked = checkboxClicado;
        checkboxes.forEach((checkbox) => {
            // console.log(checkbox);
            if (checkbox === firstChecked || checkbox === lastChecked) {
                inBetween = !inBetween;
                // console.log("comienza el clicado");
            }
            if (inBetween) {
                checkbox.checked = false;
            }
        });
        return;
    }
    firstChecked = checkboxClicado;
    // "e.shiftKey" retorna "true" o "false" si la tecla shift está presionada o no
    // console.log(e.shiftKey);
}
