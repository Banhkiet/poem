window.addEventListener("message", (e) => {

    const iframe = document.querySelector("iframe");
    if (!iframe) return;

    const height = Number(e.data);

    if (!isNaN(height)) {
        iframe.style.height = (height + 20) + "px";
    }

});
