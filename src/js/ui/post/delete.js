import {deletePost} from "../../api/post/delete"

export async function onDeletePost(id) {

    const doDelete = confirm("Are you sure you want to delete this post?")

    if(!doDelete) {
        return
    }

    let deleted

    try {
        deleted = deletePost(id)
    }
    catch(err) {
        alert(`error: ${deleted.errors[0].message}`)
    }
    setTimeout(()=> {
        window.location.reload()
    }, 200)
}
