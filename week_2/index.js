const toggle = document.getElementById("toggle");
const post = document.querySelectorAll(".post");

toggle.addEventListener("click", changeTheme);

function changeTheme() {
    body.classList.toggle("dark");
    for (let i = 0; i < post.length; i++) {
        post[i].classList.toggle("grey");
    }
}