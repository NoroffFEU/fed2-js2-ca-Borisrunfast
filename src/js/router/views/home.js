import { authGuard } from "../../utilities/authGuard"
import { readPosts } from "../../api/post/read"
import { onDeletePost } from "../../ui/post/delete"
import { onLogout } from "../../ui/auth/logout"
import { isAuthor } from "../../utilities/isAuthor"

authGuard();

const allPostsBody = document.getElementById('all-posts')

const data = await readPosts()

for (let i = 0; i < data.data.length; i++) {
    const {title, body, media, tags, id, author} = data.data[i]
    const postBody = document.createElement('div')
    postBody.classList = "p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"

    const postTitle = document.createElement('h3')
    postTitle.innerText = title
    postTitle.classList = "text-lg font-semibold text-primary mb-2"

    const postImg = document.createElement('img')
    if(media?.url) {
        postImg.src = media?.url
        postImg.alt = media?.alt
        postImg.classList = "w-full aspect-video object-cover rounded mb-2"
    } else {
        postImg.src = "../../../public/images/noImage.jpg"
        postImg.alt = "No Image"
        postImg.classList = "w-full aspect-video object-cover rounded mb-2"
    }

    const postParagraph = document.createElement('p')
    postParagraph.innerText = body
    postParagraph.classList = "text-gray-700 mb-4"

    const postTags = document.createElement('p')
    postTags.innerText = `Tags: ${tags.join(' ')}`
    postTags.classList = "text-sm text-secondary mb-4"


    const viewPostBtn = document.createElement('button')
    viewPostBtn.innerText = "View Post"
    viewPostBtn.classList = "text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600 mr-2"

    viewPostBtn.addEventListener('click', () => {
        window.location.href = `${window.location.origin}/post/?id=${id}`
    });

    if (isAuthor(author.name)) {
        const editBtn = document.createElement('button')
        editBtn.innerText = "Edit"
        editBtn.classList = "text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 mr-2"

        editBtn.addEventListener('click', () => {
            window.location.href = `${window.location.origin}/post/edit/?id=${id}`
        })

        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        deleteBtn.classList = "text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"

        deleteBtn.addEventListener('click', () => {
            onDeletePost(id)
        })

        postBody.append(postTitle, postImg, postParagraph, postTags, viewPostBtn, editBtn, deleteBtn)
    } else {
        postBody.append(postTitle, postImg, postParagraph, postTags, viewPostBtn)
    }
    allPostsBody.append(postBody)
}


const logoutBtn = document.getElementById("logout-btn")

logoutBtn.addEventListener("click", () => {
    onLogout()
})