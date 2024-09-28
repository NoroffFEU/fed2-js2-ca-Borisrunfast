import { register } from "../../api/auth/register";

export async function onRegister(data) {

    let registered

    try{
        registered = await register(data)
    }
    catch(err) {
        alert(`error: ${registered.errors[0].message}`)
    }
    finally{
        if (registered.data) {
            alert(`Logged in as: ${registered?.data.name}`)
        }
    }
}
