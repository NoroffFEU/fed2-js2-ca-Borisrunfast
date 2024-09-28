import { login } from "../../api/auth/login"

export async function onLogin(formData) {

    let loggedIn

    try {
        loggedIn = await login(formData)
    }
    catch (err) {
        alert(err)
    }
    finally {
        if (loggedIn.data) {
            alert(`Logged in as: ${loggedIn?.data.name}`)
            window.location.href = window.location.origin
        } else if (loggedIn.errors) {
            alert(`error: ${loggedIn.errors[0].message}`)
        }
    }
    
}
