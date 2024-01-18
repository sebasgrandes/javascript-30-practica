// ! actualizando constantemente lastX y lastY por los offset de mi "e"... MI LINEA ES MUCHO MÁS CONTINUA

const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// para dibujar necesitamos el objeto de contexto de dibujo
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#BADA55"; /* color de las lineas */
ctx.lineJoin =
    "round"; /* apariencia de los angulos donde se encuentran 2 lineas */
ctx.lineCap = "round"; /* apariencia del final de las lineas */
ctx.lineWidth = 50;

let pintarActive;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
    pintarActive = true;
    [lastX, lastY] = [
        e.offsetX,
        e.offsetY,
    ]; /* mi punto iNICIAL se actualiza conforme al lugar donde esta mi mouse */
});
canvas.addEventListener("mouseup", () => (pintarActive = false));
canvas.addEventListener("mouseout", () => (pintarActive = false));
canvas.addEventListener("mousemove", pintar);

let color = 0;
let direction = true;
function pintar(e) {
    // console.log(pintarActive);
    // console.log(e);
    if (!pintarActive) return;
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
    ctx.beginPath();
    // inicia desde
    ctx.moveTo(lastX, lastY);
    // va hacia
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [
        e.offsetX,
        e.offsetY,
    ]; /* mi punto de "inicio" se va actualizando conforme al lugar donde esta mi mouse */

    color++;
    // console.log(color);
    if (color >= 360) {
        color = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
        return;
    }
    ctx.lineWidth--;
}
