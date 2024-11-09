import {deletePost} from "../../api/post/delete"

export async function onDeletePost(id) {

    let deleted

    try {
        deleted = deletePost(id)
    }
    catch(err) {
        alert(`error: ${deleted.errors[0].message}`)
    }
    finally{
        if (post.data) {
            alert(`Post has been deleted`)
        }
    }

}
