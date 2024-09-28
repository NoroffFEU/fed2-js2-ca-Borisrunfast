import { API_KEY, API_SOCIAL_POSTS } from '../constants'

export async function createPost({ title, body, tags, media }) {


    const response = await fetch(API_SOCIAL_POSTS, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.accessToken)}`,
            'X-Noroff-API-Key': API_KEY
        },
        body: JSON.stringify({
            "title": title,
            "body": body,
            "tags": [tags],
            "media": {...media}
        })
    }) 
        
    const data = await response.json()
    return {data, response}

}
