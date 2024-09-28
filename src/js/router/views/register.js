import { onRegister } from "../../ui/auth/register";

const form = document.forms.register;

form.addEventListener("submit",  (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    onRegister(data)

});
