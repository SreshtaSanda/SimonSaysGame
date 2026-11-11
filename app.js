let userSeq = [];
let gameSeq = [];
let colorSeq = ["green", "red", "yellow", "blue"];
let highestScore = 0;
let level = 0;
let started = false;

let h2 = document.querySelector('h2');

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(()=>{
        btn.classList.remove("gameFlash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    }, 250);
    let color = btn.getAttribute("id");
    userSeq.push(color);
    checkBtn(userSeq.length-1);
}

function checkBtn(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        if(level > highestScore){
            highestScore = level;
        }
        h2.innerHTML = `Game Over. Your score is ${level}. <i>Highest score is ${highestScore}</i><br>Press any key to restart.`
        reset();
    }
}

let allBtns = document.querySelectorAll('.box');
for(let btn of allBtns){
    btn.addEventListener("click", ()=>{
        userFlash(btn);
    });
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let rdmidx = Math.floor(Math.random() * 3);
    let rdmclr = colorSeq[rdmidx];
    gameSeq.push(rdmclr);
    let btn = document.querySelector(`.${rdmclr}`);
    gameFlash(btn);
}

document.addEventListener("keypress", ()=>{
    if(started == false){
        started = true;
        levelUp();
    }
});

function reset(){
    userSeq=[];
    gameSeq=[];
    level = 0;
    started = false;
}



