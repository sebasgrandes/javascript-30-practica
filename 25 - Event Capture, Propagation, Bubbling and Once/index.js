// selecciono los divs
const divs = document.querySelectorAll("div");
// console.log(divs);

divs.forEach((div) => {
    // aqui existe propagación de eventos: un evento se propaga o extiende sobre los elementos del dom desde el objetivo hasta la raiz del documento. existen 2 tipos: bubbling (comportamiento por defecto) y capture
    div.addEventListener(
        "click",
        () => {
            // bubbling (de abajo a arriba): three, two, one
            console.log(div);
        },
        {
            // capture (de arriba a abajo): one, two, three
            capture: true,
            // once permite que el evento sea escuchado una unica vez y luego sea eliminado
            once: true,
        }
    );
});

// once puede ser util en botones que quieres que se de click
