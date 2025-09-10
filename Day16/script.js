let btn = document.querySelector('button');
let body = document.querySelector('body');
let h2 = document.querySelector('h2');
// btn.onclick = function(){
//     h2.innerText = "Ankit";
//     body.style.backgroundColor = 'yellow';
// }

btn.addEventListener("click", ()=>{
    h2.innerText = "Ankit";
    body.style.backgroundColor = 'yellow';
})

let inp = document.querySelector('input');
let h3 = document.querySelector('h3');
inp.addEventListener('input', (e)=>{
    // console.log(e.target.value);
    h3.innerText = e.target.value;
})