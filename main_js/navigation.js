import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

    /* ================= MENU ACTIVE ================= */

    const menuLinks = document.querySelectorAll(".submenu a");
    const mainMenus = document.querySelectorAll(".menu > li > a");

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainMenus.forEach(m => m.classList.remove("active"));

            const parentLi = link.closest("li");
            const submenu = parentLi.closest(".submenu");
            const mainLi = submenu.closest("li");
            const parentMenu = mainLi.querySelector("a");

            if (parentMenu) {
                parentMenu.classList.add("active");
            }

        });

    });


    /* ================= DARK MODE ================= */

    const darkIcon = document.getElementById("darkIcon");

    function updateDarkIcon() {
        if (!darkIcon) return;

        darkIcon.innerText =
            document.body.classList.contains("dark") ? "🌙" : "☀️";
    }

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


    /* ================= LOGIN + USER MENU ================= */

    const auth = getAuth();

    const loginIcon = document.getElementById("loginIcon");
    const userMenu = document.getElementById("userMenu");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginLink = document.getElementById("loginLink");


    if (loginIcon) {

        onAuthStateChanged(auth, (user) => {

            if (user) {

                /* đổi icon */

                loginIcon.classList.remove("shake");
                loginIcon.classList.add("logged");

                /* không mở trang login nữa */

                if (loginLink) {
                    loginLink.removeAttribute("href");
                }

            } else {

                loginIcon.classList.remove("logged");
                loginIcon.classList.add("shake");

                if (loginLink) {
                    loginLink.href = "account/login_register.html";
                }
            }
            if (user && profileLink) {

                const username = user.username;

                profileLink.href = "account/personal_profile.html?username=" + username;

            }
        });


        /* mở menu user */

        loginIcon.addEventListener("click", () => {

            if (loginIcon.classList.contains("logged") && userMenu) {

                userMenu.classList.toggle("show");

            }

        });

    }


    /* ================= CLICK MENU ITEM -> AUTO CLOSE ================= */

    if (userMenu) {

        const menuLinks = userMenu.querySelectorAll("a");

        menuLinks.forEach(link => {

            link.addEventListener("click", () => {

                setTimeout(() => {

                    userMenu.classList.remove("show");

                }, 2000);

            });

        });

    }


    /* ================= LOGOUT ================= */

    if (logoutBtn) {

        logoutBtn.addEventListener("click", (e) => {

            e.preventDefault();

            signOut(auth).then(() => {

                /* đóng menu */

                if (userMenu) {
                    userMenu.classList.remove("show");
                }

                /* quay về trang chủ */

                window.location.href = "index.html";

            });

        });

    }


    /* ================= CLICK OUTSIDE MENU ================= */

    document.addEventListener("click", (e) => {

        if (!e.target.closest(".user-box")) {

            if (userMenu) {
                userMenu.classList.remove("show");
            }

        }

    });
    const profileLink = document.getElementById("profileLink");
});
