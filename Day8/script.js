// Reduce 
let arr = [1,2,3,43,22,12,58,34];
var sum = arr.reduce((a,b,c,d)=>{
    return a + b;
})
console.log(sum);

var sum = arr.reduce((a,b,c,d)=>{
    return a + b;
},10) //Here 10 is default value...
console.log(sum);

// Sum of even numbers...
var arr1 = arr.filter((a,b,c)=>{
    return a % 2 == 0;
})
var sum = arr1.reduce((a, b, c, d)=>{
    return a + b;
})
console.log(sum);

// Ascending order sorting...
var arr2 = arr.sort((a,b)=>{
    return a-b;
})
console.log(arr2);

// Descending order sorting...
var arr2 = arr.sort((a,b)=>{
    return b-a;
})
console.log(arr2);

// Object...
let obj = {
    id:1,
    name:"Ankit",
    sum:function(){
        console.log("Hiiii");
    }
}
//If we write a function in an object then it is called method...
obj.sum();
console.log(obj.id);

// We can pass an object in a function...
function func(a){
    console.log(a);
}
let obj1 = {
    id:2,
    name:"Ankit"
}
func(obj1);

a = 5;
console.log(window);