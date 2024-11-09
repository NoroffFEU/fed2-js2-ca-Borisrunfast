import { onLogin } from "../../ui/auth/login";

const form = document.forms.login;

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    onLogin(data)

});
