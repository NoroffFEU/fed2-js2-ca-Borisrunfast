import { authGuard } from "../../utilities/authGuard";
import { readPost } from "../../api/post/read"
import { onUpdatePost } from "../../ui/post/update";

authGuard();


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlid = urlParams.get('id')

if (!urlid) {
    alert("Something wrong with the ID of the post, you'll be sent back to the main page");
}


const data = await readPost(urlid)
const {title, body, tags, media} = data.data

const docTitle = document.getElementById("title")
const docBody = document.getElementById("body")
const docTags = document.getElementById("tags")
const docUrl = document.getElementById("url")
const docAlt = document.getElementById("alt")

docTitle.value = title
docBody.value = body
docTags.value = tags.join(" ")
docUrl.value = media?.url
docAlt.value = media?.alt



const form = document.forms.editPost;

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const fData = Object.fromEntries(formData)

    console.log(fData)

    const sortedData = {
        "title": fData.title, 
        "body": fData.body, 
        "tags": fData.tags, 
        "media": {
            "url": fData.url, 
            "alt": fData.alt
        }
    }

    onUpdatePost(urlid, sortedData)

});