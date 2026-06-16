const listEl = document.querySelector(".site-nav");

const firstListChild = listEl.firstElementChild;
firstListChild.style.color = "green";
firstListChild.firstElementChild.style.color = "green";

const allChildrens = listEl.children;

for (const child of allChildrens) {
    child.firstElementChild.classList.add("nav-link");
}

const linksEl = document.querySelectorAll(".site-nav__item > a");

for (const link of linksEl) {
    link.classList.add("new-link");
}

const inputEl = document.querySelector("input");
const buttonEl = document.querySelector('button[type="button"]');

buttonEl.textContent = inputEl.value;

const newList = document.querySelector(".js_list");

newList.innerHTML =
    '<li class="js_item"><a href="./index.html"><span>hi</span></a></li>';

newList.insertAdjacentHTML(
    "afterbegin",
    '<li class="js_item"><a href="./index.html"><span>nooo</span></a></li>'
);

const colorPickerContainer = document.querySelector(".js-color-picker");

const colorPickerOptions = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
    { label: "grey", color: "#607D8B" },
    { label: "pink", color: "#E91E63" },
    { label: "indigo", color: "#3F51B5" },
];

const markup = colorPickerOptions
    .map(
        option =>
            `<button type="button" style="background-color:${option.color}">
                label ${option.label}
            </button>`
    )
    .join("");

colorPickerContainer.innerHTML = markup;