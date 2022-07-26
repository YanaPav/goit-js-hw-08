
import throttle from "lodash.throttle"
const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onFormSubmit)

let formData = {}

initForm() 

function onFormInput(e) {
    const {name, value} = e.target    
    formData[name] = value

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function onFormSubmit(e) {
    e.preventDefault()

    const emailValue = e.currentTarget.elements.email.value
    const messageValue = e.currentTarget.elements.message.value


    if (!emailValue || !messageValue) {
        console.log('All fields must be filled')
        return
    }

    console.log(formData)
    localStorage.removeItem('feedback-form-state')
    form.reset()
    formData = {}
}

function initForm() {
    let storageData = localStorage.getItem("feedback-form-state")
    if (storageData) {
        storageData = JSON.parse(storageData)
        Object.entries(storageData).forEach(([name, value]) => {
            form.elements[name].value = value
            formData[name] = value
        })
    }

}

