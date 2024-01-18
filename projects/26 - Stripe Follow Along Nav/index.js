// ">" descendientes directos
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
    // console.log(this); /* trigger */
    this.classList.add("trigger-enter"); /* display: block */
    setTimeout(() => {
        // ! si la 1era parte es verdadero, entonces se ejecuta la 2da parte... si la 1era parte es false, entonces no se ejecuta la 2da parte
        this.classList.contains("trigger-enter") &&
            this.classList.add("trigger-enter-active");
        // if (this.classList.contains("trigger-enter")) {
        //     this.classList.add("trigger-enter-active"); /* opacity: 1 */
        //     // console.log(this);
        // }
    }, 150);
    background.classList.add("open");

    // // const dropdown = document.querySelector(".dropdown");
    // importante hacer referencia a this para seleccionar bien el dropdown, si haces referencia al document, solo seleccionarás el 1ero
    const dropdown = this.querySelector(".dropdown");
    // console.log(dropdown);
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    // console.log(dropdownCoords);
    // console.log(navCoords);
    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        left: dropdownCoords.left - navCoords.left,
        top:
            dropdownCoords.top -
            navCoords.top /* esto porque mi background empieza al mismo nivel que mi nav, por lo tanto al sumarle mi dropdowncord debo restarle ese espacio que hay desde nav hacia arriba (generado por el texto o algo más) */,
    };
    background.style.width = `${coords.width}px`;
    background.style.height = `${coords.height}px`;
    // también puedes usar translate
    background.style.left = `${coords.left}px`;
    background.style.top = `${coords.top}px`;
    // console.log("enter");
}
function handleLeave() {
    this.classList.remove(
        "trigger-enter",
        "trigger-enter-active"
    ); /* display: block */
    background.classList.remove("open");
    // console.log("leave");
}

triggers.forEach((trigger) =>
    trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
    trigger.addEventListener("mouseleave", handleLeave)
);
// console.log(botones);
