document.addEventListener("DOMContentLoaded", () => {

    /* ================= MENU ACTIVE ================= */

    const menuLinks = document.querySelectorAll(".submenu a");
    const mainMenus = document.querySelectorAll(".menu > li > a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {

            // bỏ active tất cả menu
            mainMenus.forEach(m => m.classList.remove("active"));

            // tìm menu cha
            const parentLi = link.closest(".menu > li");

            if (parentLi) {
                const parentMenu = parentLi.querySelector("a");
                if (parentMenu) parentMenu.classList.add("active");
            }

        });
    });


    /* ================= DARK MODE ================= */

    const darkIcon = document.getElementById("darkIcon");

    function updateDarkIcon() {
        if (!darkIcon) return;
        darkIcon.innerText = document.body.classList.contains("dark") ? "🌙" : "☀️";
    }

    // load trạng thái đã lưu
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
    }

    updateDarkIcon();

    window.toggleDark = () => {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        localStorage.setItem("darkMode", isDark);

        updateDarkIcon();
    };

});

/* ================= IFRAME AUTO HEIGHT ================= */

window.addEventListener("message", (e) => {

    const iframe = document.querySelector("iframe");
    if (!iframe) return;

    const height = Number(e.data);

    if (!isNaN(height)) {
        iframe.style.height = (height + 20) + "px";
    }

});