import { readPost } from "../../api/post/read"
import { isAuthor } from "../../utilities/isAuthor"
import { deletePost } from "../../api/post/delete"

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const urlid = urlParams.get("id")

if (!urlid) {
  alert("Something went wrong with the ID of the post. You'll be redirected to the main page.")
  window.location.href = "/"
}

const postContainer = document.getElementById("post-body")

const data = await readPost(urlid)
const { title, body, media, tags, id, author } = data.data

const postWrapper = document.createElement("div")
postWrapper.classList = "space-y-6"

const postTitle = document.createElement("h2")
postTitle.innerText = title
postTitle.classList = "text-2xl font-bold text-center text-primary"

if (media?.url) {
  const postImg = document.createElement("img")
  postImg.src = media.url
  postImg.alt = media.alt || "Post image"
  postImg.classList = "w-full h-auto rounded-lg shadow-md"
  postWrapper.appendChild(postImg)
} else {
const postImg = document.createElement("img")
  postImg.src = "../../../public/images/noImage.jpg"
  postImg.alt = "no image"
  postImg.classList = "w-full h-auto rounded-lg shadow-md"
  postWrapper.appendChild(postImg)
}

const postParagraph = document.createElement("p")
postParagraph.innerText = body
postParagraph.classList = "text-gray-800 leading-relaxed"

const postTags = document.createElement("p")
postTags.innerText = `Tags: ${tags.join(", ")}`
postTags.classList = "text-sm text-gray-500 italic"

if (isAuthor(author.name)) {
  const actionButtonsWrapper = document.createElement("div")
  actionButtonsWrapper.classList = "flex space-x-4 justify-center mt-6"

  const editBtn = document.createElement("button")
  editBtn.innerText = "Edit"
  editBtn.classList = "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
  editBtn.addEventListener("click", () => {
    window.location.href = `${window.location.origin}/post/edit/?id=${id}`
  });

  const deleteBtn = document.createElement("button")
  deleteBtn.innerText = "Delete"
  deleteBtn.classList = "bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePost(id).then(() => {
        window.location.href = "/"
      })
    }
  })

  actionButtonsWrapper.append(editBtn, deleteBtn)
  postWrapper.append(postTitle, postParagraph, postTags, actionButtonsWrapper)
} else {
    postWrapper.append(postTitle, postParagraph, postTags)
}

postContainer.append(postWrapper)


