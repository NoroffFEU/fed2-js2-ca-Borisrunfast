import "./css/style.css";

import router from "./js/router";
import { toggleMenu } from "./js/utilities/toggleNavigation"

await router(window.location.pathname);


const menuButton = document.querySelector("#menu-toggle-btn");

if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
}