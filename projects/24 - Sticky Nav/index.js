const main = document.querySelector("#main");
// console.log(main);
const topofNav = main.offsetTop;
// console.log(topofNav);

document.addEventListener("scroll", (e) => {
    // console.log(window.scrollY);
    // console.log(main.offsetTop);
    // console.log(main.offsetHeight);
    if (window.scrollY >= topofNav) {
        // console.log("asdasdasd");
        // recuerda que no puedes animar el width... pero el max-width si
        document.body.style.paddingTop = `${main.offsetHeight}px`;

        document.body.classList.add("fixed");
        return;
    }
    document.body.style.paddingTop = "0px";
    document.body.classList.remove("fixed");
    // console.log("nope");
});
