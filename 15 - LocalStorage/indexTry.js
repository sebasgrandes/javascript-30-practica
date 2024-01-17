let items = [];
const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
addItems.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e.target); /* referencia el formulario  */
    // console.log(this); /* referencia la ventana global */
    const inputTexto = e.target.querySelector("input[type='text']");
    const plateObject = {
        text: inputTexto.value,
        done: false,
    };
    // console.log(textoIngresado);
    // console.log(items);
    items = [...items, plateObject];
    // console.log(items);
    localStorage.setItem("items", JSON.stringify(items));
    // console.log(items);
    insertHTML(items);
    inputTexto.value = "";
    // console.log(items);
    console.log(items);
});

document.addEventListener("DOMContentLoaded", () => {
    const itemsLocal = JSON.parse(localStorage.getItem("items"));
    if (itemsLocal) {
        items = itemsLocal;
        insertHTML(itemsLocal);
    }
});
// console.log(itemsList);
let html = "";
function insertHTML(items) {
    // console.log(items);
    items.forEach((item) => {
        // console.log(item);
        let n = 0;
        html += `
        <li>
            <input type="checkbox" data-index="${n}" name="item${n}"></input>
            <label for="item${n}">${item.text}</label>
        </li>
        `;
        n += 1;
    });
    itemsList.innerHTML = html;
    // console.log(html);
    html = "";
    activadorTaco();
}

function activadorTaco() {
    const lis = Array.from(document.querySelectorAll("li"));
    // console.log(lis);
    lis.forEach((li) => {
        console.log(li);
        let i = 0;
        li.addEventListener("click", () => {
            // items[i].done = true;
            const inputLi = li.querySelector("input");
            inputLi.checked
                ? (inputLi.checked = false)
                : (inputLi.checked = true);
            // console.log(inputLi);
            // console.log(inputLi.checked);
        });
        i += 1;
    });
    // console.log(li);
}
