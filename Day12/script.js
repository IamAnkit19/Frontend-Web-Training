// for(var i=1; i<=5; i++){
//     function x(i){
//         setTimeout(()=>{
//             console.log(i);
//         },1000*i)
//     }
//     x(i);
// }

// console.log(window);
// console.log(this);
// a = 5;
// console.log(this.a);
// console.log(window.a);

// let obj = {
//     id:41,
//     name:"Ankit",
//     sum:function(){
//         console.log(this);
//         console.log(this.name);
//     }
// }
// obj.sum();

// a = 5;
// let obj = {
//     id:41,
//     a:10,
//     name:"Ankit",
//     func:()=>{
//         console.log(this.a);
//         console.log(this);
//         // In case of arrow function this keyword doesn't refer to current object. It refer to global object called window. And if any varible is not declared using any keyword like let, var, const then it will we in window object.
//     },
//     sum:function(){
//         console.log(this);
//         console.log(this.name);
//     }
// }
// obj.func();

// Prototype: They are predefined properties. If we try to access a key or a function which is not in the current object then it will check it in its prototype. If it is also not present in it then it will check on objects prototype. If its not present here then it will return null. 
// let obj = {
//     id:41,
//     name:"Ankit"
// }
// console.log(obj.toString());

// Pollyfills: If we make a function which is already inbuilt with same functionality with different name.
// Custom map function named as ankit.
let arr = [1,2,3];
Array.prototype.ankit = function(callback){ //Here we create a function. We can also take an arrow function.
    let res = [];
    for(let i = 0; i < this.length; i++){
        res.push(callback(this[i], i, this));
    }
    return res;
}
let data = arr.ankit((a, b, c) => {
    return a * 10;
});
console.log(data);

// Custom filter function named as myFilter.
let arr1 = [1,2,3];
Array.prototype.myFilter = function(callback){ //Here we create a function. We can also take an arrow function.
    let res = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            res.push(this[i])
        }
    }
    return res;
}
let data1 = arr.myFilter((a, b, c) => {
    return a > 1;
});
console.log(data1);