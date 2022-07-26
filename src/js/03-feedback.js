
import throttle from "lodash.throttle"
const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onFormSubmit)
const LOCAL_STORAGE_KEY = "feedback-form-state"

// let formData = {}

initForm() 

function onFormInput(e) {
    const {name, value} = e.target    
    
    let storageData = localStorage.getItem(LOCAL_STORAGE_KEY)
    storageData = storageData ? JSON.parse(storageData) : {}
    storageData[name] = value
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData))
}

function onFormSubmit(e) {
    e.preventDefault()

    const emailValue = e.currentTarget.elements.email.value
    const messageValue = e.currentTarget.elements.message.value


    if (!emailValue || !messageValue) {
        console.log('All fields must be filled')
        return
    }

    console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    form.reset()
    // formData = {}
}

function initForm() {
    let storageData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storageData) {
        storageData = JSON.parse(storageData)
        Object.entries(storageData).forEach(([name, value]) => {
            form.elements[name].value = value
            // formData[name] = value
        })
    }

}

