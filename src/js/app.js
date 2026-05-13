let logoReload = document.getElementById("reload");
let exploreBtn = document.querySelector(".explore");
let modal = document.getElementById("modal");
let closeBtn=document.getElementById("closeBtn")

logoReload.addEventListener("click", () => {
    location.reload();
});

exploreBtn.addEventListener("click", (e) => {
    modal.classList.add("active");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});
