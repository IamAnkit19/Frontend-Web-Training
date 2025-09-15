let canvas = document.querySelector("canvas");
let pen = canvas.getContext("2d");
// pen.fillStyle="red";
// pen.fillRect(10, 10, 10, 10);
// pen.clearRect(10, 10, 10, 10); //Used to delete rect at that position
let snakeCells = [[0,0]];
let cell = 10;
function draw(){
    for(let i of snakeCells){
        pen.fillStyle = "red";
        pen.fillRect(i[0], i[1], cell, cell);
    }
}
draw();
// let i = 0, j = 0;
// document.addEventListener("keypress", (e)=>{
//     if(e.key == "ArrowUp"){
//         i-=50;
//         pen.fillStyle = "red";
//         pen.fillRect(i, j, cell, cell);
//     }
//     else if(e.key == "ArrowDown"){
//         i+=50;
//         pen.fillStyle = "red";
//         pen.fillRect(i, j, cell, cell);
//     }
//     else if(e.key == "ArrowLeft"){
//         j-=50;
//         pen.fillStyle = "red";
//         pen.fillRect(i, j, cell, cell);
//     }
//     else if(e.key == "ArrowRight"){
//         j+=50;
//         pen.fillStyle = "red";
//         pen.fillRect(i, j, cell, cell);
//     }
    
// })
function update(){

}