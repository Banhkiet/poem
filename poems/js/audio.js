document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("audio");
    const audioIcon = document.getElementById("audioIcon");
    const player = document.getElementById("player");
    const playBtn = document.getElementById("playBtn");
    const progress = document.getElementById("progress");
    const progressContainer = document.getElementById("progressContainer");
    const timeDisplay = document.getElementById("time");

    if(!audio) return;

    let isOpen = false;

    /* ẨN ICON + PLAYER BAN ĐẦU */
    audioIcon.style.display = "none";
    player.classList.remove("show");

    /* HIỆN ICON KHI LOAD OK */
    audio.addEventListener("loadedmetadata", () => {
        audioIcon.style.display = "inline-block";
    });

    /* ===== CLICK ICON LOA ===== */
    audioIcon.addEventListener("click", () => {

        if(!isOpen){
            // MỞ PLAYER + PHÁT
            player.classList.add("show");
            audio.play();
            audioIcon.classList.remove("fa-volume-xmark");
            audioIcon.classList.add("fa-volume-high");
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            isOpen = true;
        } 
        else{
            // ĐÓNG PLAYER + PAUSE (KHÔNG RESET TIME)
            audio.pause();
            player.classList.remove("show");
            audioIcon.classList.remove("fa-volume-high");
            audioIcon.classList.add("fa-volume-xmark");
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            isOpen = false;
        }
    });

    /* ===== PLAY / PAUSE ===== */
    playBtn.addEventListener("click", () => {
        if(audio.paused){
            audio.play();
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }else{
            audio.pause();
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });

    /* ===== UPDATE PROGRESS ===== */
    audio.addEventListener("timeupdate", () => {
        if(!audio.duration) return;

        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percent + "%";

        let minutes = Math.floor(audio.currentTime / 60);
        let seconds = Math.floor(audio.currentTime % 60);
        if(seconds < 10) seconds = "0" + seconds;
        timeDisplay.textContent = minutes + ":" + seconds;
    });

    /* ===== SEEK ===== */
    progressContainer.addEventListener("click", (e) => {
        if(!audio.duration) return;

        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        audio.currentTime = (clickX / width) * audio.duration;
    });

});