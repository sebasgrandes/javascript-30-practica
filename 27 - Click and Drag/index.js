const slider = document.querySelector(".items");
console.log(slider);

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    // coordenadas X del mouse en relacion con la ventana - coordenadas del borde izquierdo del div = posicion del mouse en el div tomando como left 0
    startX = e.clientX - slider.getBoundingClientRect().left;
    console.log(startX);
    scrollLeft = slider.scrollLeft;
    console.log(scrollLeft);
    // console.log(e.clientX);
    // console.log(slider.getBoundingClientRect().left);
});
slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
    isDown = false;

    slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
    if (!isDown)
        return; /* si isDown es false (al salir del div o dejar el click) entonces que no se ejecute el slide */
    e.preventDefault();
    // x es la coordenada x tomando como referencia el borde izquierdo de slider
    const x = e.clientX - slider.getBoundingClientRect().left;
    // walk = coordenada X - inicio X -> positivo si se desplaza hacia derecha, negativo si se desplaza a izquierda
    const walk = (x - startX) * 2;
    // console.log({ x, xa, startX });
    // el scroll será restado por walk. si walk es positivo (nuestro moviendo el curso hacia la derecha)... entonces será restado correctamente a scrollleft. lo inverso sería la suma
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});
