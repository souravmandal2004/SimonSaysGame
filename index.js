let h2 = document.querySelector ("h2");


let btns = ["red", "yellow", "green", "purple"];

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

// press any key to start the game
document.addEventListener ("keypress", function () {
    if (started == false) {
        console.log ("Game Started");
        started = true;

        levelUp ();
    }   
});

// Button flash 
function btnFlash (btn) {
    btn.classList.add ("flash");

    setTimeout (function () {
        btn.classList.remove ("flash");
    }, 100);
}

function levelUp () {

    userSeq = [];
    level ++;
    h2.innerText = `Level ${level}`;

    // Choose random button between 0 to 3 index
    let randomIndex = Math.floor (Math.random() * 4);
    let randomColor = btns[randomIndex];
    let randomButton = document.querySelector (`.${randomColor}`);

    // console.log (randomIndex);
    // console.log (randomColor);
    // console.log (randomButton);

    gameSeq.push (randomColor);
    // console.log (gameSeq);

    btnFlash (randomButton);
}

function checkAns (index) {

    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout (levelUp, 1000);
        }   
    }
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> </br> Press any key to start`;
        reset ();
    }
}


function btnPress () {
    let btn = this; 
    btnFlash (btn);

    let userColor = btn.getAttribute ("id");
    // console.log (userColor);

    userSeq.push (userColor);

    checkAns (userSeq.length-1);

}

let allBtns = document.querySelectorAll (".btn");

for (let btn of allBtns) {
    btn.addEventListener ("click", btnPress);
}

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}