import { updatePost } from "../../api/post/update"

export async function onUpdatePost(id, data) {

    let answer

    try{
        answer = await updatePost(id, data)
    }
    catch (err) {
        alert(`something went wrong: ${err}`)
    }
    finally {
        if (answer.response.ok) {
            alert("The post has been updated")
            window.location.href = `${window.location.origin}`;
        }
    }
}
