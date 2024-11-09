import { API_KEY, API_SOCIAL_PROFILES} from "../constants"

export async function readProfile(username) {

    const response = await fetch(`${API_SOCIAL_PROFILES}/${username}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.accessToken)}`,
            'X-Noroff-API-Key': API_KEY
        }
    }) 

    const data = await response.json()

    return data.data
}

export async function readProfiles(limit = 12, page = 1) {
    const response = await fetch(`${API_SOCIAL_PROFILES}/?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.accessToken)}`,
            'X-Noroff-API-Key': API_KEY
        }
    }) 

    const data = await response.json()

    return data.data
}
