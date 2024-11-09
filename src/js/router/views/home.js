import { authGuard } from "../../utilities/authGuard";
import { readPosts } from "../../api/post/read"
import { onDeletePost } from "../../ui/post/delete"
import { onLogout } from "../../ui/auth/logout";

authGuard();




const allPostsBody = document.getElementById('all-posts')

const data = await readPosts()


for (let i = 0; i < data.data.length; i++) {
    const {title, body, media, tags, id} = data.data[i]

    const postBody = document.createElement('div')
    postBody.classList = "post-decoration-1"
    
    const postTitle = document.createElement('h3')
    postTitle.innerText = title

    const postImg = document.createElement('img')
    if(media?.url) {
        postImg.src = media?.url
        postImg.alt = media?.alt
        postImg.classList = "post-img"
    }
    

    const postParagraph = document.createElement('p')
    postParagraph.innerText = body
    const postTags = document.createElement('p')
    postTags.innerText = `Tags: ${tags.join(' ')}`

    const editBtn = document.createElement('button')
    editBtn.innerText = "edit"

    editBtn.addEventListener('click', () => {
        window.location.href = `${window.location.origin}/post/edit/?id=${id}`;
    })

    const viewPostBtn = document.createElement('button')
    viewPostBtn.innerText = "view post"

    viewPostBtn.addEventListener('click', () => {

        window.location.href = `${window.location.origin}/post/?id=${id}`;

    })

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = "delete"

    deleteBtn.addEventListener('click', () => {
        onDeletePost(id)
    })

    postBody.append(postTitle, postImg, postParagraph, postTags, editBtn, viewPostBtn, deleteBtn)
    allPostsBody.append(postBody)

}


const logoutBtn = document.getElementById("logout-btn")

logoutBtn.addEventListener("click", () => {
    onLogout()
})