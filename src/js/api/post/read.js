import { API_SOCIAL_POSTS, API_KEY } from "../../api/constants"

export async function readPost(id) {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.accessToken)}`,
            'X-Noroff-API-Key': API_KEY
        }
    }) 

    const data = await response.json()

    return data
}

export async function readPosts(limit = 12, page = 1, tag) {

    
    const response = await fetch(`${API_SOCIAL_POSTS}?limit=${limit}&page=${page}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.accessToken)}`,
            'X-Noroff-API-Key': API_KEY
        }
    }) 

    const data = await response.json()

    return data
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {

}

