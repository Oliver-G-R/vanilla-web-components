import '@styles/contact.css'

document.addEventListener('DOMContentLoaded', () => {
    const $form_contact = document.querySelector('#form-contact')
    
    $form_contact.addEventListener('submit', (e) => {
        e.preventDefault()

        const dataInputs = Object.fromEntries(new FormData(e.target))

        window.open(`mailto:oliver.kali.hub@gmail.com?subject=${dataInputs.title}&body=${dataInputs.message}${dataInputs.name}`)

        e.target.reset()
    })

})