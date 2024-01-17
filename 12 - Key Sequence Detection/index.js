const array = [];
// console.log(array[2]);

document.addEventListener("keydown", (e) => {
    array.push(e.key);
    if (array.length === 6) {
        array.splice(0, 1); /* desde el indice 0 eliminame 1 elemento */
    }
    if (array.join("") === "sebas") {
        console.log("combinación correcta");
        cornify_add();
        return;
    }
});
