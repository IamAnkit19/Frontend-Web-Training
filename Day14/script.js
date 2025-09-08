// let promise = new Promise((res, rej) => {
//     res();
// })
// console.log(promise);
// promise.then(()=>{
//     console.log("Promise Fulfilled");
// })
// promise.catch(()=>{
//     console.log("Promise Rejected");
// })

// function step1(){
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//             console.log("Select Image");
//             res();
//         },5000)
//     })
// }
// function step2(){
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//             console.log("Captionnnn");
//             res();
//         },4000)
//     })
// }
// function step3(){
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//             console.log("Filterrrr");
//             res();
//         },2000)
//     })
// }
// function step4(){
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//             console.log("Posttt");
//             res();
//         },1000)
//     })
// }

// Promises using .then and .catch
// step1().then(()=>{
//     step2().then(()=>{
//         step3().then(()=>{
//             step4().then(()=>{

//             })
//         })
//     })
// })

// Promises using async and await
// async function call(){
//     await step1();
//     await step2();
//     await step3();
//     await step4();
// }
// call();

// step1();
// step2();
// step3();
// step4();

// Callback Hell
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4();
//         })
//     })
// })

let promise = new Promise(()=>{
    console.log("Hello");
})
console.log("Hii");