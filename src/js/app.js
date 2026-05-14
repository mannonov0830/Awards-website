let logoReload = document.getElementById("reload");
let exploreBtn = document.querySelector(".explore");
let serchBtn = document.getElementById("serchBtn")
let reloadBtn = document.getElementById("reloadBtn")
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("closeBtn")
let btns = document.querySelectorAll(".btnTop")

logoReload.addEventListener("click", () => {
    location.reload();
});

reloadBtn.addEventListener("click", () => {
    location.reload()
})

exploreBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

serchBtn.addEventListener("click", () => {
    modal.classList.add("active");
});



window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        btns.forEach((item) => {
            item.classList.remove("active");
        });

        btn.classList.add("active");

    });
});