let inp = document.querySelector('input');
let add = document.getElementById('add');
let removeAll = document.getElementById('r-all');
let removeFirst = document.getElementById('r-first');
let ul = document.querySelector('ul');
let body = document.querySelector('body');
let arr = JSON.parse(localStorage.getItem("Data")) || [];
for(let d of arr){
    let li = document.createElement('li');
    li.innerText = d;
    ul.append(li);
}
add.addEventListener("click", ()=>{
    let data = inp.value;
    let li = document.createElement('li');
    li.innerText = data;
    ul.append(li);
    inp.value = "";
    arr.push(data);
    let stringData = JSON.stringify(arr);
    localStorage.setItem("Data", stringData);
})
removeAll.addEventListener("click", ()=>{
    ul.innerHTML = "";
    arr = [];
    localStorage.removeItem("Data");
    // ul.remove();
    // let newUl = document.createElement('ul');
    // ul = newUl;
    // body.append(ul);
    // localStorage.removeItem("Data");
})
removeFirst.addEventListener("click", ()=>{
    arr.shift();
    let stringData = JSON.stringify(arr);
    localStorage.setItem("Data", stringData);
    let x = ul.firstChild;
    x.remove();
})