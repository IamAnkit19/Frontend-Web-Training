// console.log(document)

let h1 = document.getElementById('one');
console.log(h1);

let x = document.getElementsByClassName('two');
console.log(x);
console.log(x[0]);

let y = document.querySelector('#one');
console.log(y);

let z = document.querySelectorAll('#one');
console.log(z);

let a = document.querySelector('.two');
console.log(a);

let b = document.querySelectorAll('.two');
console.log(b[1]);

let c = document.getElementsByTagName('h1');
console.log(c);
console.log(c[0]);
c[0].style.color = 'blue';
c[1].style.color = 'red';
for(let i of c){
    i.style.background = 'gray'
}

let attribute = document.querySelector('a');
console.log(attribute.getAttribute('href'));
attribute.setAttribute('href','https://github.com/IamAnkit19');
attribute.innerText = 'Github';
console.log(attribute.innerText);