// var a = 5;
// var a = () => { // We can redeclare it.
//     console.log("Hii");
// }
// a();

// let b = 5;
// b = () => { //Cannot redeclare it.
//     console.log("Hii");
// }
// b();

// const c = 5;
// c = () => { //Cannot redeclare also cannot reassign.
//     console.log("Hii");
// }
// c();

// Pure function: If we call a function many times but its output doesn't change.
// function func1(){
//     console.log("Hiii");
// }
// func1();
// func1();

// Impure function: If we call a function many times and its output change on each call.
// let x = 10;
// function func2(){
//     x += 10;
//     return x;
// }
// console.log(func2());
// console.log(func2());

// Scope...
// {
//     let a = 10;
//     console.log(a);
// }
// // console.log(a); //Cannot access after the block scope.
// let x = 20;
// {
//     let x = 30;
//     console.log(x);
// }
// console.log(x);
// var y = 30;
// {
//     y = 40;
//     console.log(y);
// }
// console.log(y);

// // Function scope...
// function func3(){
//     var z = 20;
// }
// console.log(z); // Cannot access z

// let arr = [1,2,6,7,1,2,3,5];
// console.log(arr);
// arr.push(10); //Push elememt in last off array...
// console.log(arr);
// arr.pop(); //Pop element from last of array...
// console.log(arr);
// arr.unshift(20); //Add element in start of array...
// console.log(arr);
// arr.shift(); //Delete element from start of array...
// console.log(arr);

// Higher order funtion (HOF): (1) If a function returns a function then it is called a higher order function...
// (2) If a function containes a function in its argument then it is also called a higher order function... 
// function outer(){
//     function inner(){
//         console.log("Inner function");
//     }
//     return inner;
// }
// let x = outer();
// x();

// function outer(a){
//     a();
// }
// function inner(){
//     console.log("Inner function");
// }
// outer(inner);

// function outer(a){
//     a();
// }

// outer(function inner(){
//     console.log("Inner function");
// });

// Dividing array according to type...
let arr = [5, "Hiii", true, false, "Ankit", 10];
let arr1 = [];
let arr2 = [];
let arr3 = [];
for(let i of arr){
    let x = typeof(i);
    if(x == "number"){
        arr1.push(i);
    }
    else if(x == "string"){
        arr2.push(i);
    }
    else if(x == "boolean"){
        arr3.push(i);
    }
}
console.log(arr1);
console.log(arr2);
console.log(arr3);