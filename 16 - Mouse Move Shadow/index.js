const texto = document.querySelector(".hero h1");
document.addEventListener("mousemove", (e) => {
    // document.documentElement.clientWidth // ancho de ventana menos el desplazamiento (causado por alguna barra de desplazamiento).
    // e.clientX devuelve las coordenadas horizontales del cursor del mouse con respecto al borde izquierdo del área del contenido visible del navegador (el área de visualización de la página web). Es relativo al viewport... para más info sobre las demas opciones, ve a notas.mkd

    // desplazamiento desde el centro
    const desplazamientoX =
        e.clientX - document.documentElement.clientWidth / 2;
    const desplazamientoY =
        e.clientY - document.documentElement.clientHeight / 2;
    // reduccion del movimiento
    const redux = 20;
    texto.style.textShadow = `
            ${desplazamientoX / redux}px ${
        desplazamientoY / redux
    }px rgba(0, 255, 3, 0.7),
            ${(desplazamientoY * 1) / redux}px ${
        (desplazamientoX * -1) / redux
    }px rgba(255, 0, 0, 0.7),
             ${(desplazamientoY * -1) / redux}px ${
        desplazamientoX / redux
    }px rgba(8, 0, 255, 0.7),
            ${(desplazamientoX * -1) / redux}px ${
        (desplazamientoY * -1) / redux
    }px rgba(231, 0, 255, 0.7)
        `;
});
