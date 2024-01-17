const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");

const tacoall = document.querySelector(".tacoall");
const untacoall = document.querySelector(".untacoall");
const deleteall = document.querySelector(".deleteall");

let items = JSON.parse(localStorage.getItem("platos")) || [];

actualizarHTML(items, itemsList);

function actualizarHTML(platos, platesList) {
    // existe una vinculacion entre id del label y el label del input... que mejora la accesibilidad y amplia el area de click. (para más info lee notas.mkd)
    platesList.innerHTML = platos
        .map((plate, i) => {
            return `
                <li>
                    <input type="checkbox" data-index=${i} id="item${i}" ${
                plate.done ? "checked" : ""
            }/>
                    <label for="item${i}">${plate.text}</label>
                </li>
            `;
        })
        .join("");
}

addItems.addEventListener("submit", (e) => {
    e.preventDefault();
    const formulario = e.target;
    const plato = {
        text: formulario.querySelector("input").value,
        done: false,
    };
    items = [...items, plato];
    // console.log(items);
    actualizarHTML(items, itemsList);

    localStorage.setItem("platos", JSON.stringify(items));
    // console.log(items);
    formulario.reset();
});

itemsList.addEventListener("click", (e) => {
    if (!e.target.matches("input")) {
        return;
    }
    const inputIndex = e.target.dataset.index;
    items[inputIndex].done = !items[inputIndex].done;
    // console.log(items[inputIndex]);
    localStorage.setItem("platos", JSON.stringify(items));
});
// console.log(items);

// console.log(tacoall);

tacoall.addEventListener("click", () => {
    items.forEach((item) => {
        item.done = true;
    });
    // console.log(items);
    actualizarHTML(items, itemsList);
    localStorage.setItem("platos", JSON.stringify(items));
});
untacoall.addEventListener("click", () => {
    items.forEach((item) => {
        item.done = false;
    });
    // console.log(items);
    actualizarHTML(items, itemsList);
    localStorage.setItem("platos", JSON.stringify(items));
});
deleteall.addEventListener("click", () => {
    items = [];

    actualizarHTML(items, itemsList);
    localStorage.setItem("platos", JSON.stringify(items));
});
