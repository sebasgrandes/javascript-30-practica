const panel = Array.from(document.querySelectorAll(".panel"));

panel.forEach((panel) => {
    panel.addEventListener("click", toggleOpen);
    panel.addEventListener("transitionend", toggleOpenActive);
});

function toggleOpen() {
    // console.log(this);
    // ! "this" hace referencia al "panel" actual
    this.classList.toggle("open");
}

function toggleOpenActive(e) {
    // EL TRANSITIONEND ESCUCHA TODAS LA FINALIZACIONES DE TRANSICIONES... NO SOLO UNA. ES DECIR, ESCUCHA 1 VEZ POR LA FINALIZACION DE TRANSICION DE FLEX-GROW, Y 1 VEZ MÁS POR TEXT-SIZE POR EJEMPLO
    // console.log(e.propertyName);
    // ! por eso, aqui le decimos que cuando la propiedad que cambio (e.propertyName), en este caso "flex"... entonces haga un toggle a "open-active"
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
    // de esa manera solo hara caso cuando esta ESPECIFICA transición, de esta ESPECÍFICA propiedad sea cambiada
}
