let index = 0;

const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const total = slides.length;

function show(){
    slider.style.transform = "translateX(-" + (index * 100) + "vw)";
}

function next(){
    index = (index + 1) % total;
    show();
}

function prev(){
    index = (index - 1 + total) % total;
    show();
}