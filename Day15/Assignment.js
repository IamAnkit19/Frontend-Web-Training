let img = document.querySelector('img');

let a = "https://images.unsplash.com/photo-1756745678835-00315541d465?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D";
let b = "https://plus.unsplash.com/premium_photo-1757260019168-606a272c7d9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D";
let c = "https://images.unsplash.com/photo-1756916475341-ef71802fe5d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D";
let d = "https://images.unsplash.com/photo-1757323149605-3577791598ee?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let arr = [a, b, c, d];
let i = 0;
setInterval(()=>{
    if(i > 3){
        i = 0;
    }
    img.setAttribute('src', arr[i]);
    i++;
},1000);

let body = document.querySelector('body')
function func(){
    if(body.style.backgroundColor == 'red')
        body.style.backgroundColor = 'green';
    else
        body.style.backgroundColor = 'red'
}
// Its wrong...
// setInterval(()=>{
//     for(let i=0; i<arr.length; i++){
//         function x(i){
//             setTimeout(()=>{
//                 img.setAttribute('src',arr[i]);
//             },1000);
//         }
//         x(i);
//     }
// }, 1000)