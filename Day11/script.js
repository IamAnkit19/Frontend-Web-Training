// let arr = [1,2,3,"Hii","hello",true,false];
// function getString(i){
//     return typeof i == "string";
// }
// function getNumber(i){
//     return typeof i == "number";
// }
// function getBoolean(i){
//     return typeof i == "boolean";
// }
// function separate(arr, fn){
//     let res = [];
//     for(let i of arr){
//         if(fn(i)){
//             res.push(i);
//         }
//     }
//     return res;
// }
// console.log(separate(arr, getString));
// console.log(separate(arr, getNumber));
// console.log(separate(arr, getBoolean));

// According to the gec of this code here "ankit" should not print. But it is printed. Here comes the concept of closuer in which it retains a copy of its lexical scope even if its parent's execution context is deleted. So here it remains the value of user("ankit").
// function outer(){
//     let user = "ankit";
//     function inner(){
//         console.log(user);
//     }
//     return inner;
// }
// let a = outer();
// a();

// // Settimeout
// setTimeout(()=>{
//     console.log("Ankit");
// }, 1000)

// // SetInterval
// let i = 1;
// setInterval(()=>{
//     console.log(i++);
// },1000)

// for(let i=1; i<5; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1000*i)
// }
for(var i=1; i<5; i++){
    function x(i){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
    x(i);
}