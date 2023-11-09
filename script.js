let playerScore = document.getElementById("playerScore")
let cpuScore = document.getElementById("cpuScore")

let player = 0;
let cpu = 0;

let playerOp;
let cpuOp;

playerScore.textContent = `${player}`;
cpuScore.textContent = `${cpu}`;

let playerChoose = document.querySelector(".playerChoose");
let cpuChoose = document.querySelector(".cpuChoose");


let rockButton = document.querySelector(".rockOption");
let paperButton = document.querySelector(".paperOption");
let scissorsButton = document.querySelector(".scissorOption");
let restartButton = document.querySelector(".restartOption");

function showHideDiv(selection, winner){
    let divWin;
    let divLos;
    if(selection === 1){
        if(winner === 1){
            divWin = document.querySelector(".playerWinner");
            divLos = document.querySelector(".cpuLooser");

            divWin.style.display = "block";
            divLos.style.display = "block";
        }
        else if(winner === 2){
            divWin = document.querySelector(".cpuWinner");
            divLos = document.querySelector(".playerLooser");

            divWin.style.display = "block";
            divLos.style.display = "block";
        }
    }
    else if(selection === 2){
        divWin = document.querySelector(".playerWinner");
        divLos = document.querySelector(".cpuLooser");
        divWin.style.display = "none";
        divLos.style.display = "none";
        divWin = document.querySelector(".cpuWinner");
        divLos = document.querySelector(".playerLooser");
        divWin.style.display = "none";
        divLos.style.display = "none";
    }
}

showHideDiv(1, 1);
showHideDiv(2, 1);





let botOption = () => {
    let cpuOption = Math.floor(Math.random() * 3);
    if(cpuOption === 0){
        cpuOp = 0;
        return cpuChoose.textContent = "Rock";
    }
    else if(cpuOption === 1){
        cpuOp = 1;
        return cpuChoose.textContent = "Paper";
    }
    else if(cpuOption === 2){
        cpuOp = 2;
        return cpuChoose.textContent = "Scissor";
    }
}



rockButton.addEventListener("click", () =>{
    botOption();
    playerOp = 0;
    result(playerOp, cpuOp);
    return playerChoose.textContent = "Rock";
});

paperButton.addEventListener("click", () =>{
    botOption();
    playerOp = 1;
    result(playerOp, cpuOp);
    return playerChoose.textContent = "Paper";
});

scissorsButton.addEventListener("click", () =>{
    botOption();
    playerOp = 2;
    result(playerOp, cpuOp);
    return playerChoose.textContent = "Scissors";
});

restartButton.addEventListener("click", () =>{
    restart();
})

function restart(){
    cpuChoose.textContent = "";
    playerChoose.textContent = "";
    setPlayerScore(0, 1);
    setPlayerScore(0, 2);
    player = 0;
    cpu = 0;
    showHideDiv(2, 0);
}

function setPlayerScore(value, selection){
    if(selection === 1){
        playerScore.textContent = `${value}`;
        if(player > 10){
            showHideDiv(1, 1);
        }
    }
    else if(selection === 2){
        if(cpu > 10){
            showHideDiv(1, 2);
        }
        cpuScore.textContent = `${value}`;
    }
}

//0 === ROCK
//1 === PAPER
//2 === SCISSORS

function result(playerOpt, cpuOpt){
    //TIP
    if(playerOpt === cpuOpt){
        setPlayerScore(player+=1, 1);
        setPlayerScore(cpu+=1, 2);
    }

    //ROCK AGAINST PAPER = PAPER WINS
    else if(playerOpt === 0 && cpuOpt === 1){
        setPlayerScore(cpu+=2, 2);
    }

    //PAPER AGAINST ROCK = PAPER WINS
    else if(playerOpt === 1 && cpuOpt === 0){
        setPlayerScore(player+=2, 1);
    }

    //ROCK AGAINST SCISSORS = ROCK WINS
    else if(playerOpt === 0 && cpuOpt === 2){
        setPlayerScore(player+=2, 1);
    }

    //SCISSORS AGAINST ROCK = ROCK WINS
    else if(playerOpt === 2 && cpuOpt === 0){
        setPlayerScore(cpu+=2, 2);
    }

    //SCISSORS AGAINST PAPER = SCISSORS WINS
    else if(playerOpt === 2 && cpuOpt === 1){
        setPlayerScore(player+=2, 1);
    }

    //PAPER AGAINST SCISSORS = SCISSORS WINS
    else if(playerOpt === 1 && cpuOpt === 2){
        setPlayerScore(cpu+=2, 2);
    }
}