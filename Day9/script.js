var a = 5;
function sum(){
    var b = 10;
    console.log(b);
}
sum();
console.log(a);

// Hoisting (var)
console.log(i)
var i = 8;
// By hoisting it will be considered as follows
// var i;
// console.log(i);
// i = 8;

// Hoisting (function)
func();
function func(){
    console.log("HIIIIIIIIIIII");
}

// Arrow function hoisting
func2();
var func2 = () => {
    console.log("Hello");
} // Here error will arise that func2 is not a function...

// If any variale is come from hoisting then it will not be accessed if it is let or const... It will be in temporal dead zone...
console.log(z);
let z = 10;