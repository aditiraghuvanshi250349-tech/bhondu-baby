let index = 0;
let clicked = false;

window.onload = function(){

    const slider = document.getElementById("slider");
    const slides = document.querySelectorAll(".slide");
    const videos = document.querySelectorAll("video");
    const total = slides.length;

    function update(){
        slider.style.transform = "translateX(-" + (index * 100) + "vw)";

        videos.forEach((video, i) => {
            if(i === index){
                video.play();
                video.muted = !clicked; // sound only after click
            } else {
                video.pause();
                video.muted = true;
            }
        });
    }

    window.next = function(){
        index = (index + 1) % total;
        update();
    }

    window.prev = function(){
        index = (index - 1 + total) % total;
        update();
    }

    // FIRST CLICK → enable sound
    document.addEventListener("click", function(){
        if(!clicked){
            clicked = true;
            update();
        }
    });

    update(); // start first video
};
document.getElementById("hint").style.display = "none";