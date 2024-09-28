import { API_KEY, API_SOCIAL_POSTS } from "../constants"

export async function updatePost(id, { title, body, tags, media }) {

    const newTags = tags.split(" ")

    console.log(newTags)

    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
        method: 'PUT',
        headers: {
            'content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.accessToken)}`,
            'X-Noroff-API-Key': API_KEY
        },
        body: JSON.stringify({
            "title": title,
            "body": body,
            "tags": tags.split(" "),
            "media": {...media}
        })
    }) 
        
    const data = await response.json()
    return {data, response}
}
