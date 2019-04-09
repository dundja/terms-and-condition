// Select elements
let header = document.querySelector(".header");
let content = document.querySelector("#content");
let img = document.querySelector(".img");
let p = document.querySelector(".p");

// Toggle class
const contentToggle = () => {
    content.classList.toggle('collapsed');
};

// Add event listener
header.addEventListener("click", function () {
    if (content.classList.contains("collapsed")) {
        contentToggle();
        content.style.height = "100px";
        p.style.height = "100px";
        img.style.transform = "rotate(180deg)";
    } else {
        content.style.height = "0px";
        p.style.height = "0px";
        img.style.transform = "rotate(0)";
        contentToggle();
    }
});