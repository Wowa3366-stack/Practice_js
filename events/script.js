const button = document.querySelector(".js-button")
const onButtonClick = (event) =>{
const button = event.target
// console.log(button);
button.style.backgroundColor = "green"
}

button.addEventListener("click", onButtonClick)

const addStyleBtn = document.querySelector(".add-style-btn")
const title = document.querySelector(".js-title")
const onAddStyleBtnClick = () =>{
title.classList.add("new-title") 
}

addStyleBtn.addEventListener("click", onAddStyleBtnClick)

const form = document.querySelector(".form")
const text = document.querySelector(".greeting")
const onFormSubmit = (event) =>{
    event.preventDefault()
    console.log(event.target);
     const form = event.target
     console.log(form.elements);
     const name = form.elements.name.value
     const surname = form.elements.surname.value
     const gender = form.elements.gender.value
     const masagge = `Дякую ${name} ${surname} (${gender}) за реєстрацію`
     text.textContent = masagge

}

form.addEventListener("submit", onFormSubmit)


const masaggeInput = document.querySelector(".masaggeInput")

const masaggeText = document.querySelector(".masaggeText")
const onInputChange = (event) =>{
const value = event.currentTarget.value
masaggeText.textContent = value
}

masaggeInput.addEventListener("input", onInputChange)