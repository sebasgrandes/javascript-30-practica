const lis = Array.from(document.querySelectorAll("li"));
// console.log(lis);

// el valorinicial 0 lo toma el acumulador. si no estableces este valor, entonces acumulador tomará el 1er elemento de tu array (lis)
const sumaTotal = lis.reduce((acumulador, li) => {
    return acumulador + transformar(li.dataset.time);
}, 0);

// console.log(transformar("45:21"));

function transformar(string) {
    const [minutos, segundos] = string.split(":");
    return Number(minutos * 60) + Number(segundos);
}

// el operador residuo % me brinda el residuo de una division de enteros. este residuo (en el sistema decimal)... también viene a ser la parte decimal (0.3564) de la division, multiplicado por el divisor... y esto para poder pasarlo al sistema decimal
function formatear(seconds) {
    let secondsLeft = seconds;
    const horas = Math.floor(secondsLeft / 3600);
    secondsLeft = seconds % 3600;
    const minutos = Math.floor(secondsLeft / 60);
    secondsLeft = seconds % 60;
    return `${horas} horas, ${minutos} minutos, ${secondsLeft} segundos`;
}

console.log(formatear(sumaTotal));
