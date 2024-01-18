const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

const lat = document.querySelector(".latitud");
const long = document.querySelector(".longitud");
const hea = document.querySelector(".head");
const opciones = {
    enableHighAccuracy: true, // Utilizar alta precisión si está disponible
    maximumAge: 0,
    timeout: 5000, // Tiempo de espera para obtener la ubicación (en milisegundos)
};
const watchID = navigator.geolocation.watchPosition(
    (data) => {
        // console.log(data);
        lat.textContent = data.coords.latitude;
        long.textContent = data.coords.longitude;
        const coordenadas = data.coords.heading;
        hea.textContent = Math.round(coordenadas);
        speed.textContent = Math.round(data.coords.speed);
        arrow.style.transform = `rotate(${coordenadas}deg)`;
    },
    (err) => {
        console.error(err);
        // speed.textContent = err;
    },
    opciones
);
