import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";

authGuard();


const form = document.forms.createPost;

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    const sortedData = {
        "title": data.title, 
        "body": data.body, 
        "tags": data.tags, 
        "media": {
            "url": data.url, 
            "alt": data.alt
        }
    }

    onCreatePost(sortedData)

});


