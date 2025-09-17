// let arr = [1,2,-3,4,-5,-3,5];
// let sum = 0;
// let first, second;
// for(let i = 0; i < arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         let currSum = arr[i] + arr[j];
//         if(currSum > sum){
//             sum = currSum;
//             first = arr[i];
//             second = arr[j];
//         }
//     }
// }
// console.log(sum);
// console.log(first);
// console.log(second);

// It is wrong
// let sum = 0;
// let first, second, third;
// for(let i = 0; i < arr.length; i++){
//     let j = i + 1, k = arr.length - 1;
//     while(j < k){
//         let currSum = arr[i] + arr[j] + arr[k];
//         if(currSum > sum){
//             sum = currSum;
//             first = arr[i];
//             second = arr[j];
//             third = arr[k];
//         }
//         j++;
//         k--;
//     }
// }
// console.log(sum);
// console.log(first);
// console.log(second);
// console.log(third);

// Object Destructring
// let obj = {
//     id:41,
//     name:"Ankit",
//     lastName:"Pal"
// }
// let {id, name} = obj; //Here we have to write id which we want to access from object
// console.log(id);
// console.log(name);

// let arr = [1,2,4,5,3,5,8];
// let [a, b, c] = arr;
// here a, b, c are representing index number
// console.log(a);
// console.log(b);
// console.log(c);

let ul = document.querySelector("ul");
fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
    return data.json();
}).then((res)=>{
    console.log(res);
    show(res);
})

function show(res){
    for(let i of res){
        let li = document.createElement("li");
        let h3 = document.createElement("h3");
        li.innerText = i.id;
        h3.innerText = i.title;
        ul.append(li, h3);
    }
}