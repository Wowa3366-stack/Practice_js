const listEl = document.querySelector(".site-nav");
console.log(listEl);
const firstChild = listEl.firstElementChild;
console.log(firstChild.textContent);
firstChild.firstElementChild.style.color = "green";

const ulListChildren = listEl.children;
console.log(ulListChildren);

for (const child of ulListChildren) {
  const link = child.firstElementChild;
  console.log(link);

  console.log(child);
  link.classList.add("nav-link");
}


const linksEl = document.querySelectorAll('.site-nav__item > a')
console.log(linksEl);

for (const link of linksEl){
    console.log(link);
    link.classList.add("new-link")
}

const inputEl = document.querySelector('input')
console.log(inputEl);
const inputValue = inputEl.value
console.log(inputValue);
const buttonEl = document.querySelector('button[type = "button"]')
console.log(buttonEl)
buttonEl.textContent = inputValue