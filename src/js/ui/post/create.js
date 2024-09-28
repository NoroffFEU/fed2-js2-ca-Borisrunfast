import { createPost } from "../../api/post/create"

export async function onCreatePost(data) {

    let post

    try {
        post = createPost(data)
    }
    catch(err) {
        alert(`error: ${err}`)
    }
    finally {
        if (answer.response.ok) {
            alert("The post has been created")
            window.location.href = `${window.location.origin}`;
        }
    }
}
