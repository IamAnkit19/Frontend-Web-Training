let board = document.querySelector(".board");
let box = document.querySelectorAll(".box");
let gameMenu = document.querySelector(".gameMenu");
let resetBtn = document.querySelector('#reset');

let turn = 'X';
let gameOn = true;
let winner = '';

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkWin(){
    for(let pattern of winPattern){
        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];
        let x = box[a];
        let y = box[b];
        let z = box[c];
        if(x.innerText != "" && x.innerText == y.innerText && y.innerText == z.innerText){
            x.style.backgroundColor = "green";
            x.style.color = "white";
            y.style.backgroundColor = "green";
            y.style.color = "white";
            z.style.backgroundColor = "green";
            z.style.color = "white";
            winner = x.innerText;
            return true;
        }
    }
    return false;
}

function check(){
    for(let b of box){
        if(b.innerText == ""){
            return true;
        }
    }
    return false;
}

for(let b of box){
    if(gameOn){
        b.addEventListener("click", ()=>{
            if(!gameOn) 
                return;
            if(turn == 'X' && b.innerText == ""){
                b.innerText = "X";
                turn = 'O';
            }
            else if(turn == 'O' && b.innerText == ""){
                b.innerText = "O";
                turn = 'X';
            }
            if(checkWin()){
                if(winner == 'X'){
                    // alert("X is winnner");
                    let h3 = document.createElement('h3');
                    h3.innerText = "X is Winner";
                    gameMenu.append(h3);
                    gameOn = false;
                }
                else{
                    // alert("O is winnner");
                    let h3 = document.createElement('h3');
                    h3.innerText = "O is Winner";
                    gameMenu.append(h3);
                    gameOn = false;
                }
            }
            else if(!check()){
                alert("Game Draw");
                gameOn = false;
            }
        })
    }
}

function resetBoard(){
    for(let b of box){
        b.innerText = "";
        b.style.backgroundColor = 'white';
        b.style.color = 'black';
    }
}

resetBtn.addEventListener("click", ()=>{
    turn = 'X';
    gameOn = true;
    winner = '';
    let h3 = document.querySelector('h3');
    h3.remove();
    resetBoard();
})

// function playGame(){
    
// }

// let interval = setInterval(()=>{
//     playGame();
// },1000);

// function stop(){
//     clearInterval(interval);
// }