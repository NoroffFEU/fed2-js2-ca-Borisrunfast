import { authGuard } from "../../utilities/authGuard"
import { readProfile } from "../../api/profile/read"
import { alertUnfinished } from "../../utilities/alertUnfinished"

authGuard()


const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let username = urlParams.get('username')

if (!username) {
    const userData = JSON.parse(localStorage.userData)
    username = userData.name
}

const {name, bio, avatar} = await readProfile(username)
const profileBody = document.getElementById('profile-body')

const docName = document.createElement('h2')
docName.innerText = name
docName.classList = "text-2xl font-bold text-primary text-center"


const docImg = document.createElement('img')
if (avatar?.url) {
    docImg.src = avatar.url
    docImg.alt = avatar.alt || "Profile picture"
    docImg.classList = "w-24 h-24 rounded-full border-4 border-secondary shadow-md"
} else {
    docImg.src = "/images/default-avatar.png"
    docImg.alt = "Default avatar"
    docImg.classList = "w-24 h-24 rounded-full border-4 border-secondary shadow-md"
}


const docBio = document.createElement('p')
docBio.innerText = bio
docBio.classList = "text-gray-700 text-center mt-4 px-4"


profileBody.append(docImg, docName, docBio)


const updateProfileBtn = document.getElementById('update-profile-btn')
updateProfileBtn.addEventListener('click', () => {
    alertUnfinished();
});