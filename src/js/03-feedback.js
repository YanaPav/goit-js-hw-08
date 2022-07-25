
import throttle from "lodash.throttle"
const form = document.querySelector('.feedback-form')
const emailEl = document.querySelector('[name="email"]')
const messageEl = document.querySelector('[name="message"]')

const storageData = JSON.parse(localStorage.getItem("feedback-form-state"))

emailEl.value = storageData ? storageData.email : ""
messageEl.value = storageData ? storageData.message : ""
    
form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onFormSubmit)

const formData = {
    email: '',
    message: ''
}

function onFormInput(e) {
    const {name, value} = e.target    
    if (name === "email") {
        formData.email =value
    } else if (name === "message") {
        formData.message = value
    }    

    saveToLocalStorage(formData) 
}

function saveToLocalStorage(data) {
    savedFormData = JSON.stringify(data)
    localStorage.setItem("feedback-form-state", savedFormData)
}

function onFormSubmit(e) {
    e.preventDefault()

    console.log(formData)
    localStorage.clear()
    form.reset()
}

