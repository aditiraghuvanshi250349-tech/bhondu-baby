let notes = [
"If kisses were raindrops, i would send you stroms. if hugs were seconds, i would send you years. if smiles were water, i would send you sea. ",
"I am in love with the way your hands fit into mine. I love your eyes and the way they smile after you make silly jokes. I love the way your lips fit with mine. And I love the way everything about you is mine. ",
"I cant wait till we start living together. I crave to say good night and give you kisses and to say that I adore you sooo much. I crave to wake up with you and eat breakfast in bed everyday. I crave to breathe the same air as you all the time.",
"Tum meri aadat nahi ho, kyunki aadatein badal jaati hai, tum meri zaroorat bhi nahi ho, kyunki zarooratein khatam ho jaati hai, tum meri woh chahat ho, jo waqt ke saath aur gehri hoti jaati hai ",
"I fell in love the way you fall asleep in my arms; slowly, and then all at once.",
"Even when I am upset or angry with you, I still want you. So thats how I know its love. I will always come back to you. I will always wait for you.",
"My sweet boy I would give up on anything just to be called yours",
"Na tere jaisa chaiye, na tujhse behtar chaiye, tujhse mohhbat karna galat hai to mujhe iski saja chahiye, Lekin us saja ke bad, Mujhe bas tu chahiye, Manjur hai mujhe Logo ki kahi bhali buri Batein sun na, Lekin in sab baton ke Bad bhi mujhe bas tu chahiye, Ha har pal har lamha, Bas tu chahiye tu",
"I will always choose you over and over and over, without pause, without doubt, always in a heartbeat. ",
"I cant go a day without talking to you. I feel so bad when I am not with you. I just love you sooo much.",
"I love the way you talk. I love the way you drive your car. I love the way you look at me and the way you read my mind. I love the way you are you. ",
"I made a wish on an eyelash, made a wish on 11s, made a wish on my birthday, talk about you to Heaven, I plan my days all around you, planets orbit around you, I was lost til I found you, I think angels surround ya",
"I have loved you ever since I have known you and so now when I look at you I cant believe you are mine and you love me like I love you.",
"I've heard of a love that comes once in a lifetime and I'm pretty sure that you are that love of mine",
"I cant promise to fix all your problems but I promise you wont have to face them alone",
"Everything in the world ceases when you hold me in your arms, and when you look into my eyes, while holding my face, I dont desire anything more.",
"I wish you were here with me righ now so I could kiss you and cuddle you and tell you how much you mean to me.",
"I think about you a lot. You are just too good to be true. I cant take my eyes off you. ",
"My heart belongs to you in every way. You are my home. I am so lucky to have you.",
"No one has ever meant to me what you mean to me, I value you more than anything in this entire world. I love being in love with you ",
"You are my EVARA",
"Rani ki tarah rakhne wala mil gaya, Mehel hum khud milkar bana lenge",
"I love how easily you make me laugh. I love how you make me want to be better. I love the way you randomly text me and the way you listen to my nonsense talks. I love the way you are there for me and the way you always let me know you are there for me. I love the way you make sure I am never alone.",
"I never thought I could love someone as much as I love you. I never knew I could be loved by someone as much as you love me. I love every minute of every day that I spend with you.",
"I need you the way ocean needs salt, the way a flower needs water and the way heart needs blood. I need you to exist.",
"Princess treatment doesnt mean you have to buy me whatever I want. It was you listening to me and protecting me. It was you not letting me stay upset. It was you make me feel I am easy to love. So yes, I do recieve princess treatment.",
"There is so much I want to talk about you. Theres so much I want to know about you like whats your favourite type of leaf or what was your favourite childhood toy or do you like me or did you notice a pattern in this website. There are so many things I wanna know about you.",
"And suddenly all love songs were about you",
"Charche nashe ke chal rahe the, main zikr teri nigaahon ka kar aaya.Jab baat sukoon ki chhidi, main baat teri baahon ki kar aaya",
"and  even tho I am unsure about most of things in my life, I am certain that I will love you forever."
];

let styles = [
"style1","style2","style3","style4","style5",
"style1","style2","style3","style4","style5",
"style1","style2","style3","style4","style5",
"style1","style2","style3","style4","style5",
"style1","style2","styleh3","style4","style5",
"style1","style2","style3","style4","style5"
];
function playMusic(){
    let music = document.getElementById("music");
    music.play();
}
let i = 0;

function show(){
    let note = document.getElementById("note");
    note.innerText = notes[i];

    let box = document.getElementById("noteBox");
    box.className = styles[i];
}

function next(){
    i++;
    if(i >= notes.length){
        i = 0;
    }
    show();
}

function prev(){
    i--;
    if(i < 0){
        i = notes.length - 1;
    }
    show();
}

/* show first note on load */
window.onload = show;