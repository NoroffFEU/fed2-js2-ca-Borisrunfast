import { putToStorage } from "../../storage/localStorage.mjs"

export async function login({ email, password }) {


    const response = await fetch('https://v2.api.noroff.dev/auth/login', {
    method: 'POST',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify({
        "email": email,
        "password": password
    })
    }) 
    
    const data = await response.json()
    if (response.ok) {
        putToStorage('userData', data.data)
        putToStorage('accessToken', data.data.accessToken)
    }
    
    return data

}
