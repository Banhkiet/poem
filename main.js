document.addEventListener("DOMContentLoaded", function(){

    const menuLinks = document.querySelectorAll(".submenu a");
    const mainMenus = document.querySelectorAll(".menu > li > a");

    menuLinks.forEach(link=>{
        link.addEventListener("click", function(){

            // Xóa active cũ
            mainMenus.forEach(m=>m.classList.remove("active"));

            // Tìm menu cha
            const parentMenu = this.closest("li")
                .parentElement
                .parentElement
                .querySelector("a");

            parentMenu.classList.add("active");
        });
    });

});