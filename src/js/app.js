let logoReload = document.getElementById("reload");
let exploreBtn = document.querySelector(".explore");
let serchBtn = document.getElementById("serchBtn")
let reloadBtn = document.getElementById("reloadBtn")
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("closeBtn")
let btns = document.querySelectorAll(".btnTop")
let logModal = document.getElementById("log_maodal")
let logBtn = document.getElementById("overlay")
let signBtn = document.getElementById("signBtn")
let SignBtn = document.getElementById("SignBtn")
let LogBtn = document.getElementById("LogBtn")

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

logModal.addEventListener("click", () => {
    logBtn.classList.add("show")
})

signBtn.addEventListener("click", () => {
    logBtn.classList.add("show")
})

SignBtn.addEventListener("click", () => {
    logBtn.classList.add("show")
})

LogBtn.addEventListener("click", () => {
    logBtn.classList.add("show")
})

window.addEventListener("click", (event) => {
    if (event.target === logBtn) {
        logBtn.classList.remove("show")
    }
})