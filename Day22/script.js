// let arr = [1,2,-3,4,5];
// let k = 3;
// let maxSum = 0;
// for(let i=0; i<=arr.length-k; i++){
//     let currSum = 0;
//     for(let j=i; j<i+k; j++){
//         currSum += arr[j];
//     }
//     if(currSum > maxSum){
//         maxSum = currSum;
//     }
// }
// console.log(maxSum);

// let arr = [1,2,-3,4,5];
// let k = 3;
// let wSum = 0;
// for(let i=0; i<k; i++){
//     wSum += arr[i];
// }
// let maxSum = wSum;
// for(let i=k; i<arr.length; i++){
//     wSum = wSum + arr[i] - arr[i-k];
//     if(wSum > maxSum){
//         maxSum = wSum;
//     }
// }
// console.log(maxSum);

// Kadane's Algorithm
// let arr = [-1,-2,-3,-4,-5];
// let maxSum = -99999999;
// let currSum = 0;
// for(let i=0; i<arr.length; i++){
//     currSum += arr[i];
//     if(currSum > maxSum){
//         maxSum = currSum;
//     }
//     if(currSum < 0){
//         currSum = 0;
//     }
// }
// console.log(maxSum);


// Promises
// let p1 = new Promise((res, rej)=>{
//     res();
// })
// let p2 = new Promise((res, rej)=>{
//     res();
// })
// let p3 = new Promise((res, rej)=>{
//     res();
// })
// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
//     // console.log("Hello");
// })
// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
//     // console.log("Hello");
// })
// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
//     // console.log("Hello");
// })

// Import
import a from "./Home.js"
import {id, sum} from "./Home.js"
console.log(a);
console.log(id);
sum();