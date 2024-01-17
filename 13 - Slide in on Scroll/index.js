// para mayor info sobre lo explicado o sobre intersectionobserver, checa nota.mkd

const imgAll = document.querySelectorAll(".slide-in");

// umbral definido
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

let observer = new IntersectionObserver(callback, options);

function callback(entries) {
    // entries: array conformado por cada información (en relacion al intersection) de cada elemento "mostrado en pantalla"
    // en la 1era carga, entries es un array que contiene todas las info (objetos llamados "INTERSECTION OBSERVER ENTRY") de todos los intersection de los elementos, es decir, 5 elementos
    // LUEGO, cada que un elemento se va mostrando en pantalla... dentro del array entries solo contiene un objeto de info de la interseccion de dicho elemento
    console.log(entries);
    // entry: objeto de datos perteneciente al array "entries"
    entries.forEach((entry) => {
        // entry.target: elemento del dom mostrado en pantalla
        // entry.isIntersecting: true o false, segun las opciones que configuramos
        entry.target.classList.toggle("active", entry.isIntersecting);
        // * si quieres que las imagenes se queden en su lugar y no se vayan cuando ya hayas pasado sobre ellas
        // if (entry.isIntersecting) {
        //     observer.unobserve(entry.target);
        // }
        // console.log(entry.target);
    });
}

imgAll.forEach((img) => {
    observer.observe(img);
});
