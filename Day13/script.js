// Asunchronous Programming...
// setTimeout(() => {
//     console.log("A");
// }, 1000);
// setTimeout(() => {
//     console.log("D");
// }, 0);
// setTimeout(() => {
//     console.log("C");
// }, 3000);
// console.log("B");
// Output B D A C

function step1(fn){
    setTimeout(()=>{
        console.log("Select Image");
        fn();
    },5000)
}
function step2(fn){
    setTimeout(()=>{
        console.log("Captionnnn");
        fn();
    },4000)
}
function step3(fn){
    setTimeout(()=>{
        console.log("Filterrrr");
        fn();
    },2000)
}
function step4(){
    setTimeout(()=>{
        console.log("Posttt");
    },1000)
}

// step1();
// step2();
// step3();
// step4();

// Callback Hell
step1(()=>{
    step2(()=>{
        step3(()=>{
            step4();
        })
    })
})