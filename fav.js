let images = [
"pic1.jpg",
"pic2.jpg",
"pic3.jpg",
"pic4.jpg",
"pic5.jpg",
"pic6.jpg",
"pic7.jpg",
"pic8.jpg",
"pic9.jpg",
"pic10.jpg",
"pic11.jpg",
"pic12.jpeg",
"pic13.jpg",
"pic14.jpg",
"pic15.jpg",
"pic16.jpg",
"pic17.jpg",
"pic18.jpg",
"pic19.jpg",
"pic20.jpg",
"pic21.jpg",
"pic22.jpg",
"pic23.jpg",
"pic24.jpg",
"pic25.jpg",
"pic26.jpg",
"pic27.jpg",
"pic28.jpeg",
"pic29.jpg",
"pic30.jpg"
];

let captions = [
"Our first ever photo together its the cutest you cant disagree😤",   
"bhayyyyyy meraaa bacchaa frrfrr 🤱🥰",
"THISSS PHOTO😩💳💥💳💥",
"one of my favs i dont even remember what we were fighting about but i literally melted when you got down and apoligised ✨😭",
"ok but my figure🤤 and the way you listening to whatever dumb stuff i was sayin ilysm🥺🥺",
"how we be running away together in my dreams ✨🎆",
"THISSSSSSSS LIKEEEE BHAIII WE LITERALLY LOOK SOOO CUTEEE IM DEAD BABY I LOVE YOU SOOOOO MUCHHHHH",
"how we will be going everywhere together🤩",
"MERI FAV PHOTOO I LOVEEE KISSING YOU MERI PYARI RASMALAI🥰 ",
"this is the photo i will be showing our kids meko college bunk karata😔😔",
"best day of my life our first date💖 ",
"prettiest photo of us💙💎",
"yk i love this photo cuz look at our height difference😭 im literally standing on my toes to kiss you😭😭",
"another one of my favs i loveeee kissin you😘😘",
"THIS IS MY FAV PHOTO OF USSSSSS BRUHHHH STOPPP I LOVE YOUUU SOOO MUCH😭💗✨ but i wonder what you kept under your knee tho🤔",
"this is my current fav photo babe we are literally baddies🔥💋",
"i mean do i even need to say anything about this one😍 mera handsome baccha 🤩🤩",
"mera scrunchie aur hoddie le li 😢💔",
"hamesha meko aaise hi khilana😤🔪",
"meko aaise hi hug karke rakha karo apne pass hamesha🥺🥺",
"babeeeeee you're best kisser ughhhh i cant get enough of you😩💗",
"best outfit i ever wore🥰🎶",
"mera handsome boy 😍💋",
"i loveeee youuuu aaise hi meri seva karna😋🥰",
"STOPPPP THIS IS MY FAV PIC OF USSSSSSSS WE LOOK SOOOO CUTEEE AND SOOOO IN LOVEEEE",
"we look like Morticia and Gomez 🖤💋 well if Gomez was tall and sexy like you😘😏",
"you are my safe place💗💜 ",
"this is sooo aesthetic😍😩",
"i love how your face perfectly fits in my hands 💖",
"the prettiest photo istg i loveee youu soooo muchh"
];

let i = 0;

function show(){
    document.getElementById("photo").src = images[i];
    document.getElementById("caption").innerText = captions[i];
}

function next(){
    console.log("next clicked");  
    i++;
    if(i >= images.length){
        i = 0;
    }
    show();
}

function prev(){
    console.log("prev clicked");   
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    show();
}