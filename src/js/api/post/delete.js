import {API_KEY, API_SOCIAL_POSTS} from "../constants"

export async function deletePost(id) {

    fetch(`${API_SOCIAL_POSTS}/${id}`, {
        method: 'DELETE',
        headers: {
            'content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.accessToken)}`,
            'X-Noroff-API-Key': API_KEY
        },
        }) 
        
}
