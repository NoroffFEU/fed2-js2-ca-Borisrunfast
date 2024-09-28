import { authGuard } from "../../utilities/authGuard";
import { readProfile } from "../../api/profile/read"
import { alertUnfinished } from "../../utilities/alertUnfinished";

authGuard();


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let username = urlParams.get('username')


if (!username) {
    const userData = JSON.parse(localStorage.userData)
    username = userData.name
}

const {name, bio, avatar} = await readProfile(username)
const profileBody =  document.getElementById('profile-body')


const docName = document.createElement('h2')
const docBio = document.createElement('p')
const docImg = document.createElement('img')

docName.innerText = name
docBio.innerText = bio
docImg.src = avatar?.url
docImg.alt = avatar?.alt

profileBody.append(docName, docImg, docBio)


const updateProfileBtn = document.getElementById('update-profile-btn')

updateProfileBtn.addEventListener('click', () => {
    alertUnfinished()
})