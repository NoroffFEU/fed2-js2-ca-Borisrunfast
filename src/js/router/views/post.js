import { readPost } from "../../api/post/read"



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlid = urlParams.get('id')


if (!urlid) {
    alert("Something wrong with the ID of the post, you'll be sent back to the main page");
}


const postContainer = document.getElementById('post-body')

const data = await readPost(urlid)

console.log(data)

const {title, body, media, tags, id} = data.data

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

const deleteBtn = document.createElement('button')
deleteBtn.innerText = "delete"

deleteBtn.addEventListener('click', () => {
    deletePost(id)
})

const viewPostBtn = document.createElement('button')
viewPostBtn.innerText = "view post"

postBody.append(postTitle, postImg, postParagraph, postTags, editBtn, deleteBtn)

postContainer.append(postBody)

