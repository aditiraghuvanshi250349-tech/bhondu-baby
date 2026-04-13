let videos = document.querySelectorAll("video");
let unlocked = false;

/* PLAY ONLY VISIBLE VIDEO */
function playVisible(){

    videos.forEach(video => {

        let rect = video.getBoundingClientRect();

        if(rect.top < window.innerHeight && rect.bottom > 0){
            video.play();
        } else {
            video.pause();
        }

    });
}

/* SCROLL */
window.addEventListener("scroll", playVisible);

/* FIRST CLICK = UNLOCK SOUND */
document.addEventListener("click", function(){

    if(!unlocked){
        unlocked = true;

        videos.forEach(video => {
            video.muted = false;
        });

        playVisible(); // 🔥 re-trigger WITH sound
    }

});

/* INITIAL LOAD */
window.onload = function(){
    playVisible();
};